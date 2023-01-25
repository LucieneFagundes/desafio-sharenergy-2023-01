import { UserRepository } from '@application/repositories/user-repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { MessagesHelper } from '@helpers/messages.helper';

interface UserRequest {
  _id: string;
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async login(user: UserRequest) {
    const payload = { sub: JSON.stringify(user._id), username: user.username };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException(
        MessagesHelper.USERNAME_OR_PASSWORD_INVALID
      );
    }

    const passwordMatch = compareSync(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException(
        MessagesHelper.USERNAME_OR_PASSWORD_INVALID
      );
    }

    return user;
  }
}
