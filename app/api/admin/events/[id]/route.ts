import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { parseForm } from '../../../../../lib/parse-form';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { promises as fs } from 'fs';
import { existsSync, mkdirSync } from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const event = await prisma.event.findUnique({
      where: { id: params.id },
    });

    if (!event) {
      return new NextResponse('Event not found', { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // @ts-ignore - Workaround for Next.js 13+ API routes
    const { fields, files } = await parseForm(request as unknown as NextApiRequest);
    
    const updateData: any = {};

    // Handle title and slug update
    if (fields.title) {
      updateData.title = fields.title.toString();
      updateData.slug = fields.title
        .toString()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-');
    }

    // Handle file upload if exists
    let imageFile = null;
    let imageType = null;
    let imageUrl = fields.imageUrl?.[0] || null;
    
    if (files?.image?.[0]) {
      const file = files.image[0];
      const fileName = `${uuidv4()}-${file.originalFilename}`;
      const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);
      
      // Save file to public/uploads
      const fileData = await fs.readFile(file.filepath);
      await fs.writeFile(filePath, fileData);
      
      imageFile = `/uploads/${fileName}`;
      imageType = 'file';
      // If both file and URL are provided, use the file and ignore the URL
      imageUrl = null;
    } else if (fields.imageUrl?.[0]) {
      imageType = 'url';
      imageUrl = fields.imageUrl[0];
    }

    // Handle other fields
    if (fields.title?.[0]) updateData.title = fields.title[0];
    if (fields.description?.[0]) updateData.description = fields.description[0];
    if (fields.content?.[0]) updateData.content = fields.content[0];
    if (fields.startDate?.[0]) updateData.startDate = new Date(fields.startDate[0]);
    if (fields.endDate?.[0]) updateData.endDate = new Date(fields.endDate[0]);
    if (fields.location?.[0]) updateData.location = fields.location[0];
    if (fields.isPublished?.[0] !== undefined) updateData.isPublished = fields.isPublished[0] === 'true';
    if (fields.isFeatured?.[0] !== undefined) updateData.isFeatured = fields.isFeatured[0] === 'true';

    // Handle image updates
    if (imageFile) {
      updateData.imageFile = imageFile;
      updateData.imageType = 'file';
      updateData.image = null; // Clear URL if file is uploaded
    } else if (imageUrl !== null) {
      updateData.image = imageUrl;
      updateData.imageType = 'url';
      updateData.imageFile = null; // Clear file if URL is provided
    }

    const event = await prisma.event.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await prisma.event.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting event:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
