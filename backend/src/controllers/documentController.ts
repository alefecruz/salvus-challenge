import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Document from '../models/Document';

import CreateDocumentService from '../services/CreateDocumentService';
import DeleteDocumentService from '../services/DeleteDocumentService';

class DocumentsController {
  index = async (request: Request, response: Response): Promise<Response> => {
    const documentReposutory = getRepository(Document);

    const documents = await documentReposutory.find({
      where: { user_id: request.user.id },
    });

    return response.json(documents);
  };

  store = async (request: Request, response: Response): Promise<Response> => {
    const createDocument = new CreateDocumentService();

    const document = await createDocument.execute({
      user_id: request.user.id,
      documentName: request.file.filename,
    });

    return response.json({ doc: document });
  };

  destroy = async (request: Request, response: Response): Promise<Response> => {
    const { doc } = request.params;

    const deleteDocument = new DeleteDocumentService();

    const message = await deleteDocument.execute({
      documentName: doc,
    });
    return response.json({ message });
  };
}

export default new DocumentsController();
