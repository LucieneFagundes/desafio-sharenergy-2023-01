import { IClient } from '@application/interfaces/client.interface';

export abstract class ClientRepository {
  abstract create(client: IClient): Promise<void>;
  abstract update(client: IClient): Promise<IClient>;
  abstract exclude(id: string): Promise<void>;
  abstract findAll(): Promise<IClient[] | null>;
  abstract findById(id: string): Promise<IClient | null>;
  abstract findByEmail(email: string): Promise<IClient | null>;
  abstract findByCpf(cpf: string): Promise<IClient | null>;
}
