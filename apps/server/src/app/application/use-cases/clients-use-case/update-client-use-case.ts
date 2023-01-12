import { ClientRepository } from '@application/repositories/client-repository';
import { MessagesHelper } from '@helpers/messages.helper';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

type UpdateRequest = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  cpf?: string;
};

@Injectable()
export class UpdateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(_id: string, client: UpdateRequest) {
    if (!isValidObjectId(_id)) {
      throw new NotFoundException(MessagesHelper.NOT_FOUND);
    }

    const { id, name, email, phone, address, cpf } = client;

    const emailAlreadyExists = await this.clientRepository.findByEmail(email);

    if (emailAlreadyExists && emailAlreadyExists.id !== _id) {
      throw new BadRequestException(MessagesHelper.EMAIL_ALREADY_EXISTENT);
    }

    const cpfAlreadyExists = await this.clientRepository.findByCpf(cpf);

    if (cpfAlreadyExists && cpfAlreadyExists.id !== _id) {
      throw new BadRequestException(MessagesHelper.CPF_ALREADY_EXISTENT);
    }

    const result = await this.clientRepository.update(_id, {
      name,
      email,
      phone,
      address,
      cpf,
    });

    return result;
  }
}
