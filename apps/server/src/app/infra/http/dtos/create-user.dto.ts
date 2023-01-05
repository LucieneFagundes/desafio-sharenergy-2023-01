import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsOptional()
  email: string;

  @IsNotEmpty()
  password: string;
}
