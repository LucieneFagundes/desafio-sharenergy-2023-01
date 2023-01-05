import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { CreateUserUseCase } from '@application/use-cases/users-use-case/create-user-use-case';
import { CreateClientUseCase } from '@application/use-cases/clients-use-case/create-client-use-case';
import { ClientController } from './controllers/client.controller';
import { FindAllClientsUseCase } from '@application/use-cases/clients-use-case/find-all-client-use-case';
import { FindOneClientUseCase } from '@application/use-cases/clients-use-case/find-one-client-use-case';
import { DeleteClientUseCase } from '@application/use-cases/clients-use-case/delete-client-use-case';
import { UpdateClientUseCase } from '@application/use-cases/clients-use-case/update-client-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, ClientController],
  providers: [
    CreateUserUseCase,
    CreateClientUseCase,
    FindAllClientsUseCase,
    FindOneClientUseCase,
    DeleteClientUseCase,
    UpdateClientUseCase,
  ],
})
export class HttpModule {}
