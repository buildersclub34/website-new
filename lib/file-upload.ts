import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import formidable, { File } from 'formidable';

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

export const parseForm = async (req: NextApiRequest): Promise<{ fields: any; files: any }> => {
  await ensureUploadDir();
  
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    filename: (name, ext, part) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      return `${name}-${uniqueSuffix}${ext}`;
    },
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return reject(err);
      }
      resolve({ fields, files });
    });
  });
};

export const handleFileUpload = async (file: File) => {
  if (!file) return null;
  
  const fileExt = path.extname(file.originalFilename || file.newFilename);
  const fileName = `${uuidv4()}${fileExt}`;
  const filePath = path.join('uploads', fileName);
  const fullPath = path.join(process.cwd(), 'public', filePath);
  
  try {
    await fs.rename(file.filepath, fullPath);
    return `/${filePath}`; // Return public URL path
  } catch (error) {
    console.error('Error saving file:', error);
    throw new Error('Failed to save file');
  }
};
