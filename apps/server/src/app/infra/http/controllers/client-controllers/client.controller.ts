import { CreateClientUseCase } from '@application/use-cases/clients-use-case/create-client-use-case';
import { DeleteClientUseCase } from '@application/use-cases/clients-use-case/delete-client-use-case';
import { FindAllClientsUseCase } from '@application/use-cases/clients-use-case/find-all-client-use-case';
import { FindOneClientUseCase } from '@application/use-cases/clients-use-case/find-one-client-use-case';
import { UpdateClientUseCase } from '@application/use-cases/clients-use-case/update-client-use-case';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateClientDto } from '../../dtos/create-client.dto';
import { UpdateClientDto } from '../../dtos/update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(
    private createClient: CreateClientUseCase,
    private findAll: FindAllClientsUseCase,
    private findOne: FindOneClientUseCase,
    private deleteClient: DeleteClientUseCase,
    private updateClient: UpdateClientUseCase
  ) {}

  @Get()
  async getAll() {
    const result = await this.findAll.execute();
    return result;
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const result = this.findOne.execute(id);
    return result;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteClient.execute(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateClientDto) {
    const result = await this.updateClient.execute(id, body);
  }

  @Post()
  async create(@Body() body: CreateClientDto) {
    //TODO: Retornar mensagem de sucesso
    const { name, email, phone, address, cpf } = body;
    const response = await this.createClient.execute({
      name,
      email,
      phone,
      address,
      cpf,
    });

    return response;
  }
}
