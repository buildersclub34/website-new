import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import formidable, { File } from 'formidable';

interface FormFields {
  [key: string]: string | string[] | undefined;
}

interface FormFiles {
  [key: string]: File | File[] | undefined;
}

export const uploadDir = path.join(process.cwd(), 'public/uploads');

// Ensure upload directory exists
const ensureUploadDir = async () => {
  try {
    await fs.mkdir(uploadDir, { recursive: true });
  } catch (error) {
    console.error('Error creating upload directory:', error);
    throw new Error('Failed to create upload directory');
  }
};

export const parseForm = async (req: NextApiRequest): Promise<{ fields: FormFields; files: FormFiles }> => {
  await ensureUploadDir();
  
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    filename: (name: string = 'file', ext: string = ''): string => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      return `${name}-${uniqueSuffix}${ext}`;
    },
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err: Error | null, fields: FormFields, files: FormFiles) => {
      if (err) {
        console.error('Error parsing form:', err);
        return reject(err);
      }
      resolve({ fields, files });
    });
  });
};

export const handleFileUpload = async (file: File | undefined | null): Promise<string | null> => {
  if (!file) return null;
  
  const filename = 
    (file as any).originalFilename || 
    (file as any).newFilename || 
    'file';
  
  const fileExt = path.extname(filename || '');
  const fileName = `${uuidv4()}${fileExt}`;
  const filePath = path.join('uploads', fileName);
  const fullPath = path.join(process.cwd(), 'public', filePath);
  
  try {
    const filepath = (file as any).filepath;
    if (!filepath) {
      throw new Error('No file path provided');
    }
    
    // Ensure the directory exists
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    
    // Move the file from temp location to final destination
    await fs.rename(filepath, fullPath);
    
    // Return the public URL path
    return `/${filePath.replace(/\\/g, '/')}`;
  } catch (error) {
    console.error('Error saving file:', error);
    throw new Error('Failed to save file');
  }
};
