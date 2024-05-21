import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Workspace from '../models/Workspace';

import CreateWorkspaceService from '../services/CreateWorkspaceService';
import DeleteWorkspaceService from '../services/DeleteWorkspaceService';

class WorkspaceController {
  index = async (request: Request, response: Response): Promise<Response> => {
    const workspaceRepository = getRepository(Workspace);

    const workspaces = await workspaceRepository.find({
      where: { user_id: request.user.id },
    });

    return response.json(workspaces);
  };

  store = async (request: Request, response: Response): Promise<Response> => {
    const { maximum_displacement, neighborhood, city, state } = request.body;

    const createWorkspace = new CreateWorkspaceService();

    const workspace = await createWorkspace.execute({
      user_id: request.user.id,
      maximum_displacement,
      neighborhood,
      city,
      state,
    });

    return response.json(workspace);
  };

  destroy = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.body;

    const deleteWorkspace = new DeleteWorkspaceService();

    const message = await deleteWorkspace.execute({ workspace_id: id });

    return response.json({ message });
  };
}

export default new WorkspaceController();
