import { IRandomUser } from '@infra/external-api/dtos/random-user.interface';
import { RandomUserService } from '@infra/external-api/random-user/random-user.service';
import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('random-user')
export class RandomUserController {
  constructor(private randomUserService: RandomUserService) {}

  @Get(':page')
  async getRandomUser(@Res() res: any, @Param('page') page: number) {
    const result = await this.randomUserService.execute(page);
    return res.json(result);
  }
}
