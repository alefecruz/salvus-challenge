import { getRepository } from 'typeorm';

import Workspace from '../models/Workspace';

interface Request {
  user_id: string;
  maximum_displacement: number;
  neighborhood: string;
  city: string;
  state: string;
}
class CreateWorkspaceService {
  public async execute({
    user_id,
    maximum_displacement,
    neighborhood,
    city,
    state,
  }: Request): Promise<Workspace> {
    const workspaceRepository = getRepository(Workspace);

    const workspace = workspaceRepository.create({
      user_id,
      maximum_displacement,
      neighborhood,
      city,
      state,
    });

    await workspaceRepository.save(workspace);

    return workspace;
  }
}

export default CreateWorkspaceService;
