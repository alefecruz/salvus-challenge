import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  cpf: string;
  dateofbirth: Date;
  address: string;
  cep: string;
  city: string;
  state: string;
  cellphone: string;
  homephone: string;
  field: string;
  crm: string;
  primary_specialty: string;
  secundary_specialty: string;
}
class CreateUserService {
  public async execute({
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
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const userAlredyExists = await userRepository.findOne({
      where: { email },
    });

    if (userAlredyExists) throw new AppError('Email alredyy used.');

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
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

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
