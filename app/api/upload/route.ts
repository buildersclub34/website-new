import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { parseForm, handleFileUpload } from '@/lib/file-upload';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // @ts-ignore - Workaround for Next.js 13+ API routes
    const { files } = await parseForm(req as unknown as NextApiRequest);
    
    if (!files?.file) {
      return new NextResponse('No file uploaded', { status: 400 });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filePath = await handleFileUpload(file);
    
    if (!filePath) {
      return new NextResponse('Failed to process file', { status: 500 });
    }

    return NextResponse.json({ url: filePath });
  } catch (error) {
    console.error('Upload error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
