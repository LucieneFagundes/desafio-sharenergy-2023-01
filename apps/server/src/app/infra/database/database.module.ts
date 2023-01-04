import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from '@application/repositories/user-repository';
import { MongooseUserRepository } from './mongoose/repositories/mongoose-user-repository';
import { User, UserSchema } from '@application/entities/user';
import { ConfigModule } from '@nestjs/config';
import { ClientRepository } from '@application/repositories/client-repository';
import { MongooseClientRepository } from './mongoose/repositories/mongoose-client-repository';
import { Client, ClientSchema } from '@application/entities/client';
import { environment } from 'src/environments/environment';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(environment.DATABASE_URL),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: MongooseUserRepository,
    },
    {
      provide: ClientRepository,
      useClass: MongooseClientRepository,
    },
  ],
  exports: [UserRepository, ClientRepository],
})
export class DatabaseModule {}
