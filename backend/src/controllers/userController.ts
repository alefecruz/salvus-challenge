import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import UpdateUserService from '../services/UpdateUserService';

class UserController {
  store = async (request: Request, response: Response): Promise<Response> => {
    const {
      name,
      email,
      password,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
      field,
      crm,
      primary_specialty,
      secundary_specialty,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
      field,
      crm,
      primary_specialty,
      secundary_specialty,
    });

    delete user.password;

    return response.json(user);
  };

  avatar = async (request: Request, response: Response): Promise<Response> => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  };

  update = async (request: Request, response: Response): Promise<Response> => {
    const {
      name,
      email,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
      field,
      crm,
      primary_specialty,
      secundary_specialty,
    } = request.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      user_id: request.user.id,
      name,
      email,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
      field,
      crm,
      primary_specialty,
      secundary_specialty,
    });

    delete user.password;

    return response.json(user);
  };
}

export default new UserController();
