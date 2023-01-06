import { IsOptional } from 'class-validator';

export class RandomUserRequest {
  @IsOptional()
  fields: string;

  @IsOptional()
  size: number;

  @IsOptional()
  page: number;
}
