import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  user_id: string;
  name: string;
  email: string;
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

class UpdateUserService {
  public async execute({
    user_id,
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
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user)
      throw new AppError(
        'Only authenticated users can change personal data.',
        401,
      );

    if (name) user.name = name;
    if (email) user.email = email;
    if (cpf) user.cpf = cpf;
    if (dateofbirth) user.dateofbirth = dateofbirth;
    if (address) user.address = address;
    if (cep) user.cep = cep;
    if (city) user.city = city;
    if (state) user.state = state;
    if (cellphone) user.cellphone = cellphone;
    if (homephone || homephone === null) user.homephone = homephone;
    if (field) user.field = field;
    if (crm) user.crm = crm;
    if (primary_specialty) user.primary_specialty = primary_specialty;
    if (secundary_specialty || secundary_specialty === null)
      user.secundary_specialty = secundary_specialty;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
