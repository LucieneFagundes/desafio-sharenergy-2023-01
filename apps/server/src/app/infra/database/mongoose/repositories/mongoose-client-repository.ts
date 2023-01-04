import { Client, ClientDocument } from '@application/entities/client';
import { IClient } from '@application/interfaces/client.interface';
import { ClientRepository } from '@application/repositories/client-repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongooseClientRepository implements ClientRepository {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>
  ) {}

  async create(client: Client): Promise<void> {
    await this.clientModel.create(client);
  }
  async update(client: IClient): Promise<IClient> {
    throw new Error('Method not implemented.');
  }
  async exclude(id: string): Promise<void> {
    await this.clientModel.deleteOne({ _id: id });
  }
  async findAll(): Promise<IClient[]> {
    return await this.clientModel.find();
  }
  async findById(id: string): Promise<IClient> {
    return this.clientModel.findById(id);
  }
  async findByEmail(email: string): Promise<Client> {
    return this.clientModel.findOne({ email });
  }
  async findByCpf(cpf: string): Promise<Client> {
    return this.clientModel.findOne({ cpf });
  }
}
