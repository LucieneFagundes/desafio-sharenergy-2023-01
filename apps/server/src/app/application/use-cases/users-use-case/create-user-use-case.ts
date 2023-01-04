import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from '@application/repositories/user-repository';
import { hash } from 'bcryptjs';
import { MessagesHelper } from '@helpers/messages.helper';

interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

type CreateUserResponse = void;

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    username,
    email,
    password,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const alreadyExists = await this.userRepository.findByUsername(username);

    if (alreadyExists) {
      throw new BadRequestException(MessagesHelper.USER_ALREADY_EXISTENT);
    }

    const hashPassword = await hash(password, 10);

    const user = await this.userRepository.create({
      username,
      email,
      password: hashPassword,
    });

    return user;
  }
}
