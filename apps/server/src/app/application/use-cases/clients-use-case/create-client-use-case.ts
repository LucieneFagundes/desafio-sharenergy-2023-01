import { ClientRepository } from '@application/repositories/client-repository';
import { MessagesHelper } from '@helpers/messages.helper';
import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';

type CreateRequest = {
  name: string;
  email: string;
  phone_number: number;
  address: string;
  cpf: string;
};

@Injectable()
export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute(data: CreateRequest): Promise<void> {
    const { name, email, phone_number, address, cpf } = data;

    const emailAlreadyExists = await this.clientRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new BadRequestException(MessagesHelper.EMAIL_ALREADY_EXISTENT);
    }

    const cpfAlreadyExists = await this.clientRepository.findByCpf(cpf);

    if (cpfAlreadyExists) {
      throw new BadRequestException(MessagesHelper.CPF_ALREADY_EXISTENT);
    }

    parseInt(cpf);

    await this.clientRepository.create({
      name,
      email,
      phone_number,
      address,
      cpf,
    });

    return;
  }
}
