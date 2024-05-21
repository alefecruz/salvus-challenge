import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';

import AppError from '../errors/AppError';

import User from '../models/User';
import uploadConfig from '../config/uploadAvatar';

interface Request {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user)
      throw new AppError('Only authenticated users can change avatar.', 401);

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.statSync(userAvatarFilePath);

      if (userAvatarFileExists) await fs.unlinkSync(userAvatarFilePath);
    }

    user.avatar = avatarFileName;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
