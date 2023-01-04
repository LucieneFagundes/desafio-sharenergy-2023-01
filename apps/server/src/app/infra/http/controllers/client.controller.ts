import { CreateClientUseCase } from '@application/use-cases/clients-use-case/create-client-use-case';
import { FindAllClientsUseCase } from '@application/use-cases/clients-use-case/find-all-client-use-case';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { CreateClientDto } from './dtos/create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private createClient: CreateClientUseCase, private findAll: FindAllClientsUseCase) { }

  @Get()
  async getAll() {
    const result = await this.findAll.execute();
    return result
  }

  @Post()
  async create(@Body() body: CreateClientDto) {
    const { name, email, phone_number, address, cpf } = body;
    const response = await this.createClient.execute({
      name,
      email,
      phone_number,
      address,
      cpf,
    });

    return;
  }
}
