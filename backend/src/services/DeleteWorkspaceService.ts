import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Workspace from '../models/Workspace';

interface Request {
  workspace_id: string;
}
class CreateWorkspaceService {
  public async execute({ workspace_id }: Request): Promise<string> {
    const workspaceRepository = getRepository(Workspace);

    const workspace = await workspaceRepository.findOne(workspace_id);

    if (!workspace) throw new AppError('Workspace does not exists.');

    await workspaceRepository.remove(workspace);

    return 'Workspace successfully deleted.';
  }
}

export default CreateWorkspaceService;
