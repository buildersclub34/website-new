import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { promises as fs } from 'fs';
import { existsSync, mkdirSync } from 'fs';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Helper function to handle form data parsing
export async function parseFormData(request: Request) {
  try {
    const formData = await request.formData();
    const fields: Record<string, string[]> = {};
    const files: Record<string, any[]> = {};

    // Convert FormData to array of entries first
    const entries = Array.from(formData.entries());
    
    // Process each entry
    for (const entry of entries) {
      const [key, value] = entry;
      
      if (value instanceof File) {
        // Handle file uploads
        const buffer = await value.arrayBuffer();
        if (!files[key]) files[key] = [];
        files[key].push({
          originalFilename: value.name,
          mimetype: value.type,
          size: value.size,
          buffer: Buffer.from(buffer),
          filepath: ''
        });
      } else if (typeof value === 'string') {
        // Handle regular fields
        if (!fields[key]) fields[key] = [];
        fields[key].push(value);
      }
    }

    return { fields, files };
  } catch (error) {
    console.error('Error parsing form data:', error);
    throw new Error('Failed to parse form data');
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const events = await prisma.event.findMany({
      orderBy: { startDate: 'desc' },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    console.log('=== New Event Request ===');
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      console.log('Unauthorized access attempt');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('User:', session.user.email);
    
    // Parse form data
    console.log('Parsing form data...');
    let fields: Record<string, string[]> = {};
    let files: Record<string, any[]> = {};
    
    try {
      const parsed = await parseFormData(request);
      fields = parsed.fields as Record<string, string[]>;
      files = parsed.files;
      console.log('Form data parsed successfully');
    } catch (error) {
      console.error('Error parsing form data:', error);
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Log all received fields
    console.log('Received fields:');
    Object.entries(fields).forEach(([key, value]) => {
      console.log(`- ${key}:`, value);
    });
    
    // Basic validation
    const requiredFields = ['title', 'description', 'content', 'startDate', 'location'];
    const missingFields = requiredFields.filter(field => !fields[field]?.[0]);
    
    if (missingFields.length > 0) {
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error(errorMsg);
      return NextResponse.json(
        { error: errorMsg },
        { status: 400 }
      );
    }

    // Create slug from title
    const title = fields.title?.[0] || '';
    const slug = title
      .toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
    
    console.log('Generated slug:', slug);

    // Handle file upload if exists
    let imageFile = null;
    let imageType = null;
    let imageUrl = fields.imageUrl?.[0] || null;
    
    console.log('Files received:', Object.keys(files));
    console.log('Image URL:', imageUrl);
    
    if (files?.image?.[0]) {
      try {
        const file = files.image[0];
        console.log('Processing file upload:', file.originalFilename);
        
        const fileExt = path.extname(file.originalFilename).toLowerCase();
        const fileName = `${uuidv4()}${fileExt}`;
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        
        // Ensure uploads directory exists
        if (!existsSync(uploadsDir)) {
          console.log('Creating uploads directory:', uploadsDir);
          await fs.mkdir(uploadsDir, { recursive: true });
        }
        
        const filePath = path.join(uploadsDir, fileName);
        console.log('Saving file to:', filePath);
        
        // Save file to public/uploads
        await fs.writeFile(filePath, file.buffer);
        
        imageFile = `/uploads/${fileName}`;
        imageType = 'file';
        console.log('File saved successfully:', imageFile);
        
        // If both file and URL are provided, use the file and ignore the URL
        imageUrl = null;
      } catch (error) {
        console.error('Error processing file upload:', error);
        return NextResponse.json(
          { error: 'Failed to process file upload' },
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    } else if (fields.imageUrl?.[0]) {
      console.log('Using image URL:', fields.imageUrl[0]);
      imageType = 'url';
      imageUrl = fields.imageUrl[0];
    }

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      if (!existsSync(uploadsDir)) {
        console.log('Creating uploads directory:', uploadsDir);
        await fs.mkdir(uploadsDir, { recursive: true });
        console.log('Uploads directory created successfully');
      } else {
        console.log('Uploads directory already exists');
      }
    } catch (error) {
      console.error('Error creating uploads directory:', error);
      throw new Error('Failed to create uploads directory');
    }

    // Validate required fields
    if (!fields.title?.[0] || !fields.description?.[0] || !fields.content?.[0] || !fields.startDate?.[0] || !fields.location?.[0]) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      console.log('Preparing event data...');
      const eventData: any = {
        title: fields.title?.[0],
        slug,
        description: fields.description?.[0],
        content: fields.content?.[0],
        startDate: new Date(fields.startDate?.[0] || ''),
        endDate: fields.endDate?.[0] ? new Date(fields.endDate[0]) : null,
        location: fields.location?.[0],
        isPublished: fields.isPublished?.[0] === 'true',
        isFeatured: fields.isFeatured?.[0] === 'true',
        authorId: session.user.id,
      };

      console.log('Event data prepared:', JSON.stringify(eventData, null, 2));

      // Only add image fields if they exist
      if (imageFile) {
        eventData.imageFile = imageFile;
        eventData.imageType = 'file';
        console.log('Using uploaded file:', imageFile);
      } else if (imageUrl) {
        eventData.image = imageUrl;
        eventData.imageType = 'url';
        console.log('Using image URL:', imageUrl);
      }

      console.log('Creating event in database...');
      const event = await prisma.event.create({
        data: eventData,
      });

      console.log('Event created successfully:', event.id);
      return NextResponse.json(event, { 
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
    } catch (error) {
      console.error('Error creating event in database:', error);
      return NextResponse.json(
        { error: 'Failed to create event in database', details: error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
