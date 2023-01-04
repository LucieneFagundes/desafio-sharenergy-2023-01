import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '@application/use-cases/users-use-case/create-user-use-case';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUserUseCase) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    const { username, email, password } = body;

    const response = await this.createUser.execute({
      username,
      email,
      password,
    });

    return response;
  }
}
