import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { parseForm, handleFileUpload } from '@/lib/file-upload';
import { prisma } from '@/lib/prisma';

// const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

interface RouteParams {
  params: { id: string | number };
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

    const eventId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
    
    const event = await prisma.event.findUnique({
      where: { id: eventId },
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

    // @ts-ignore - Workaround for Next.js 13+ API routes
    const { fields, files } = await parseForm(request as any);
    
    let imageUrl = fields.imageUrl?.[0] || null;
    
    const imageFiles = files?.image;
    if (Array.isArray(imageFiles) && imageFiles[0]) {
      try {
        const file = imageFiles[0];
        const uploadedUrl = await handleFileUpload(file);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      } catch (error) {
        console.error('Error handling file upload:', error);
        return NextResponse.json(
          { error: 'Failed to process file upload' },
          { status: 500 }
        );
      }
    } else if (fields.imageUrl?.[0]) {
      imageUrl = fields.imageUrl[0];
    }

    // Update event data
    const eventData: any = {
      title: fields.title?.[0],
      description: fields.description?.[0],
      content: fields.content?.[0],
      startDate: fields.startDate?.[0] ? new Date(fields.startDate[0]) : null,
      endDate: fields.endDate?.[0] ? new Date(fields.endDate[0]) : null,
      location: fields.location?.[0],
      isPublished: fields.isPublished?.[0] === 'true',
      isFeatured: fields.isFeatured?.[0] === 'true',
    };

    // Only add image if it's being provided
    if (imageUrl !== null && imageUrl !== undefined) {
      eventData.image = imageUrl;
    }

    const eventId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
    
    const event = await prisma.event.update({
      where: { id: eventId },
      data: eventData,
    });

    return NextResponse.json(event);
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

    const eventId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
    
    await prisma.event.delete({
      where: { id: eventId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting event:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
