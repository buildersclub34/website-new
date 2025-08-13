import { IncomingForm } from 'formidable';
import type { NextApiRequest } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

type FormidableFile = {
  filepath: string;
  originalFilename: string | null;
  mimetype: string | null;
  size: number;
  newFilename: string;
  _writeStream?: any;
  hash?: string;
};

type FormidableFiles = {
  [key: string]: FormidableFile | FormidableFile[] | undefined;
};

type FormidableFields = {
  [key: string]: string[];
};



export interface FileUploadResult {
  fields: { [key: string]: string[] };
  files: { [key: string]: FormidableFile[] };
}

export async function parseForm(req: NextApiRequest): Promise<FileUploadResult> {
  const form = new IncomingForm();
  
  return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) return reject(err);
      
      // Convert fields to string arrays
      const stringFields: { [key: string]: string[] } = {};
      for (const [key, value] of Object.entries(fields)) {
        stringFields[key] = Array.isArray(value) ? value : [value || ''];
      }
      
      // Ensure files is always an array
      const fileMap: { [key: string]: FormidableFile[] } = {};
      for (const [key, value] of Object.entries(files)) {
        if (value) {
          fileMap[key] = Array.isArray(value) ? value : [value];
        }
      }
      
      resolve({
        fields: stringFields,
        files: fileMap,
      });
    });
  });
}

export async function handleFileUpload(file: FormidableFile): Promise<string | null> {
  try {
    if (!file.filepath) {
      throw new Error('No file path found');
    }
    
    // For now, we'll just move the file to the public/uploads directory
    // In a production environment, you'd want to upload to a cloud storage service
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });
    
    const fileName = `${Date.now()}-${file.originalFilename || 'file'}`;
    const filePath = path.join(uploadDir, fileName);
    
    await fs.rename(file.filepath, filePath);
    
    // Return the public URL
    return `/uploads/${fileName}`;
  } catch (error) {
    console.error('Error handling file upload:', error);
    return null;
  }
}
