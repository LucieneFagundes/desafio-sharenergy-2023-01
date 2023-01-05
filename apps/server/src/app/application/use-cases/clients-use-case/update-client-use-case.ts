import { ClientRepository } from '@application/repositories/client-repository';
import { MessagesHelper } from '@helpers/messages.helper';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

type UpdateRequest = {
  name?: string;
  email?: string;
  phone_number?: number;
  address?: string;
  cpf?: string;
};

@Injectable()
export class UpdateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: string, client: UpdateRequest) {
    if (!isValidObjectId(id)) {
      throw new NotFoundException(MessagesHelper.NOT_FOUND);
    }

    const { name, email, phone_number, address, cpf } = client;

    const emailAlreadyExists = await this.clientRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new BadRequestException(MessagesHelper.EMAIL_ALREADY_EXISTENT);
    }

    const cpfAlreadyExists = await this.clientRepository.findByCpf(cpf);

    if (cpfAlreadyExists) {
      throw new BadRequestException(MessagesHelper.CPF_ALREADY_EXISTENT);
    }

    const result = await this.clientRepository.update(id, {
      name,
      email,
      phone_number,
      address,
      cpf,
    });

    return result;
  }
}
