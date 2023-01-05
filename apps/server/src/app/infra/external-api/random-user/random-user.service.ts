import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IRandomUser } from './random-user.interface';

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(
    fields?: string,
    size: number = 10,
    page: number = 1
  ): Promise<IRandomUser[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `https://randomuser.me/api/?results=${size}&inc=${fields}&page=${page}`
      )
    );
    return data;
  }
}
