import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';

import AppError from '../errors/AppError';

import uploadConfigDoc from '../config/uploadDocs';
import Document from '../models/Document';

interface Request {
  documentName: string;
}
class CreateDocumentService {
  public async execute({ documentName }: Request): Promise<string> {
    const documentRepository = getRepository(Document);

    const document = await documentRepository.findOne({
      where: {
        doc: documentName,
      },
    });

    if (!document) throw new AppError('Document does not exists.');

    const documentFilePath = path.join(uploadConfigDoc.directory, document.doc);

    const documentFileExists = await fs.statSync(documentFilePath);

    if (documentFileExists) await fs.unlinkSync(documentFilePath);

    await documentRepository.remove(document);

    return 'Document successfully deleted.';
  }
}

export default CreateDocumentService;
