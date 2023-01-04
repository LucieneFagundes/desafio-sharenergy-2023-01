import { CreateClientUseCase } from '@application/use-cases/clients-use-case/create-client-use-case';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private createClient: CreateClientUseCase) {}

  @Get()
  async test() {
    return 'test';
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

    return response;
  }
}
