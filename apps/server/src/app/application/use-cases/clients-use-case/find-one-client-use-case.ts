import { ClientRepository } from "@application/repositories/client-repository";
import { MessagesHelper } from "@helpers/messages.helper";
import { Injectable, NotFoundException } from "@nestjs/common";
import { isValidObjectId } from "mongoose";

@Injectable()
export class FindOneClientUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute(id: string) {

    if (!isValidObjectId(id)) {
      throw new NotFoundException(MessagesHelper.NOT_FOUND);
    }

    const response = await this.clientRepository.findById(id);



    if (!response) {
      throw new NotFoundException(MessagesHelper.NOT_FOUND);
    }

    return response;
  }
}