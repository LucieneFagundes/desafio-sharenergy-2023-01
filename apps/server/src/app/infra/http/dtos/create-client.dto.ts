import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  @IsOptional()
  phone_number: number;

  @IsNotEmpty()
  address: string;

  @Length(14)
  cpf: string;
}
