declare module 'formidable' {
  import { IncomingMessage } from 'http';
  import { Readable } from 'stream';

  export interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    lastModifiedDate?: Date;
    hash?: string;
    originalFilename?: string;
    newFilename?: string;
    filepath?: string;
    mimetype?: string;
    mtime?: Date;
  }

  export interface Files {
    [key: string]: File | File[] | undefined;
  }

  export interface Fields {
    [key: string]: string | string[] | undefined;
  }

  export interface Options {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    maxFileSize?: number;
    maxFieldsSize?: number;
    maxFields?: number;
    hash?: boolean | string;
    multiples?: boolean;
    type?: string;
    filename?: (name: string, ext: string, part: any) => string;
  }

  export class IncomingForm {
    constructor(options?: Options);
    parse(req: IncomingMessage, callback: (err: any, fields: Fields, files: Files) => void): void;
    onPart(part: any): void;
    handlePart(part: any): void;
  }

  export default function formidable(options?: Options): IncomingForm;
}
