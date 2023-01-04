import { ClientRepository } from '@application/repositories/client-repository';
import { MessagesHelper } from '@helpers/messages.helper';
import { Injectable } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class DeleteClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: string) {
    if (!isValidObjectId(id)) {
      throw new NotFoundException(MessagesHelper.NOT_FOUND);
    }

    const response = await this.clientRepository.findById(id);

    if (!response) {
      throw new NotFoundException(MessagesHelper.NOT_FOUND);
    }

    await this.clientRepository.exclude(id);
  }
}
