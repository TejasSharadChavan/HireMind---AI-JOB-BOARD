declare module 'pdf-parse' {
  import { Buffer } from 'buffer';

  interface PDFInfo {
    numpages: number;
    numrender: number;
    info: Record<string, any>;
    metadata: any;
    version: string;
    text: string;
  }

  function pdf(buffer: Buffer | Uint8Array): Promise<PDFInfo>;

  export = pdf;
}
