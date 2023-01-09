import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IRandomUser } from '../dtos/random-user.interface';

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  async execute(
    page: number = 1,
    fields?: string,
    size: number = 5
  ): Promise<IRandomUser[]> {
    var data = [];
    fields = 'name,email,login,dob,picture';

    await firstValueFrom(
      this.httpService.get(
        `https://randomuser.me/api/?results=${size}&inc=${fields}&page=${page}`,
        {
          headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
        }
      )
    )
      .then((response) => (data = response.data))
      .catch((error) => console.log(error));
    return data;
  }
}
