import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

const userRouter = Router();

userRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    const userRepository = getRepository(User);

    const [, registerAmount] = await userRepository.findAndCount();

    const query = await userRepository
      .createQueryBuilder('users')
      .select('users.field AS field')
      .addSelect('COUNT(*) AS amount')
      .groupBy('users.field')
      .getRawMany();

    const amountByField = query.map(data => {
      const value = parseInt(data.amount);
      const name = data.field;
      return { name, value };
    });

    return response.json({ registerAmount, amountByField });
  },
);

export default userRouter;
