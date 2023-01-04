import { IClient } from "@application/interfaces/client.interface";
import { ClientRepository } from "@application/repositories/client-repository";
import { Injectable } from "@nestjs/common/decorators";



@Injectable()
export class FindAllClientsUseCase {
  constructor(private clientRepository: ClientRepository) { }

  async execute(): Promise<IClient[]> {
    const result = await this.clientRepository.findAll();
    return result;
  }
}