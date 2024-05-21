import { Request, Response } from 'express';

import AuthorizationUserService from '../services/AuthorizationUserService';

class SessionController {
  store = async (request: Request, response: Response): Promise<Response> => {
    const { email, password } = request.body;

    const authorizationUser = new AuthorizationUserService();

    const { token, user } = await authorizationUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  };
}

export default new SessionController();
