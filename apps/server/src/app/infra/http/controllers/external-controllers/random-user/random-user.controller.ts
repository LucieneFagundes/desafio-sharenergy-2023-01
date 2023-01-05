import { IRandomUser } from '@infra/external-api/random-user/random-user.interface';
import { RandomUserService } from '@infra/external-api/random-user/random-user.service';
import { Controller, Get, Res } from '@nestjs/common';

@Controller('random-user')
export class RandomUserController {
  constructor(private randomUserService: RandomUserService) {}

  @Get()
  async getRandomUser(@Res() res: any) {
    const result = await this.randomUserService.findAll(
      'name,email,login,dob,picture'
    );
    return res.json(result);
  }
}
