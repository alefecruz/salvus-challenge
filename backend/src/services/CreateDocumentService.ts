import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Document from '../models/Document';

interface Request {
  user_id: string;
  documentName: string;
}

class CreateDocumentService {
  public async execute({ user_id, documentName }: Request): Promise<string> {
    const documentRepository = getRepository(Document);

    const [, documentAmount] = await documentRepository.findAndCount({
      where: { user_id },
    });

    if (documentAmount > 4)
      throw new AppError(
        'Maximum document limit reached. The quantity cannot be more than 5 documents',
      );

    const document = documentRepository.create({
      user_id,
      doc: documentName,
    });

    await documentRepository.save(document);

    return document.doc;
  }
}

export default CreateDocumentService;
