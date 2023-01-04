import { CreateClientUseCase } from '@application/use-cases/clients-use-case/create-client-use-case';
import { FindAllClientsUseCase } from '@application/use-cases/clients-use-case/find-all-client-use-case';
import { FindOneClientUseCase } from '@application/use-cases/clients-use-case/find-one-client-use-case';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(
    private createClient: CreateClientUseCase,
    private findAll: FindAllClientsUseCase,
    private findOne: FindOneClientUseCase,
  ) { }

  @Get()
  async getAll() {
    const result = await this.findAll.execute();
    return result
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.findOne.execute(id);
  }

  @Post()
  async create(@Body() body: CreateClientDto) {
    //TODO: Retornar mensagem de sucesso
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
