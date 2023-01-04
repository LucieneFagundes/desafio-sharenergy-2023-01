import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { CreateUserUseCase } from '@application/use-cases/users-use-case/create-user-use-case';
import { CreateClientUseCase } from '@application/use-cases/clients-use-case/create-client-use-case';
import { ClientController } from './controllers/client.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, ClientController],
  providers: [CreateUserUseCase, CreateClientUseCase],
})
export class HttpModule {}
