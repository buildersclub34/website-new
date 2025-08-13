import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { promises as fs } from 'fs';
import { join } from 'path';
import { authOptions } from '@/lib/auth';
import { handleFileUpload } from '@/lib/file-upload';
import { prisma } from '@/lib/prisma';
import { Event, EventUpdateInput } from '../../../../../types/event';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface RouteParams {
  params: { id: string };
}

export async function GET(
  request: Request,
  { params }: RouteParams
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
  { params }: RouteParams
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Parse form data
    const formData = await request.formData();
    const fields: Record<string, string[]> = {};
    
    // Extract fields using Array.from to ensure compatibility
    Array.from(formData.entries()).forEach(([key, value]) => {
      if (typeof value === 'string') {
        if (!fields[key]) fields[key] = [];
        fields[key].push(value);
      }
    });
    
    // Handle file upload if exists
    let imageUrl: string | undefined = fields.image?.[0];
    const imageFile = formData.get('image') as File | null;
    
    if (imageFile && imageFile.size > 0) {
      try {
        // Create a temporary file path
        const tempDir = join(process.cwd(), 'tmp');
        const tempPath = join(tempDir, `upload-${Date.now()}-${imageFile.name}`);
        
        // Ensure temp directory exists
        await fs.mkdir(tempDir, { recursive: true });
        
        // Write file to temp location
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        await fs.writeFile(tempPath, buffer);
        
        // Upload to storage
        const uploadedUrl = await handleFileUpload({
          filepath: tempPath,
          originalFilename: imageFile.name,
          newFilename: imageFile.name,
          mimetype: imageFile.type,
          size: imageFile.size,
        });
        
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
        
        // Clean up temp file
        await fs.unlink(tempPath).catch(console.error);
      } catch (error) {
        console.error('Error uploading file:', error);
        return new NextResponse('Error uploading file', { status: 500 });
      }
    }

    // Prepare event data with proper typing
    const eventData: EventUpdateInput = {
      title: fields.title?.[0],
      description: fields.description?.[0],
      content: fields.content?.[0],
      location: fields.location?.[0],
      isPublished: fields.isPublished?.[0] === 'true',
      isFeatured: fields.isFeatured?.[0] === 'true',
      updatedAt: new Date(),
    };

    // Handle dates with proper type checking
    if (fields.startDate?.[0]) {
      eventData.startDate = new Date(fields.startDate[0]);
    }
    
    if (fields.endDate?.[0]) {
      eventData.endDate = new Date(fields.endDate[0]);
    } else if (eventData.startDate) {
      // If no end date provided, set it to the same as start date
      eventData.endDate = new Date(eventData.startDate as string | Date);
    }

    // Handle image
    if (imageUrl) {
      eventData.image = imageUrl;
      eventData.imageType = 'url';
    } else if (fields.imageFile?.[0]) {
      eventData.imageFile = fields.imageFile[0];
      eventData.imageType = 'file';
    }

    // Handle categories if provided
    if (fields.categoryIds?.[0]) {
      const categoryIds = fields.categoryIds[0].split(',').filter(Boolean);
      if (categoryIds.length > 0) {
        eventData.categories = {
          set: categoryIds.map(id => ({ id })),
        };
      }
    }

    // Update event with transaction to handle categories
    const updatedEvent = await prisma.$transaction(async (tx) => {
      // First update the event
      const event = await tx.event.update({
        where: { id: params.id },
        data: {
          ...eventData,
          // Remove categories from the update as we'll handle them separately
          categories: undefined,
        },
      });

      // Then update categories if they were provided
      if (fields.categoryIds?.[0]) {
        const categoryIds = fields.categoryIds[0].split(',').filter(Boolean);
        if (categoryIds.length > 0) {
          // First remove all existing category associations
          await tx.event.update({
            where: { id: params.id },
            data: {
              categories: {
                set: [],
              },
            },
          });

          // Then add the new ones
          await tx.event.update({
            where: { id: params.id },
            data: {
              categories: {
                connect: categoryIds.map(id => ({ id })),
              },
            },
          });
        }
      }

      // Fetch the updated event with relations
      return tx.event.findUnique({
        where: { id: params.id },
        include: {
          categories: true,
          author: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
      });
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: RouteParams
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
