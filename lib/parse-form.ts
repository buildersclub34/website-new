import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';
import formidable, { File, Files, Fields } from 'formidable';

export const parseForm = async (
  req: NextApiRequest | IncomingMessage
): Promise<{ fields: Fields; files: Files }> => {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
};

export const handleFileUpload = async (file: File) => {
  // This is a placeholder function that matches the import in your code
  // The actual file handling is now done directly in the route
  throw new Error('handleFileUpload should not be called directly. Use parseForm instead.');
};
