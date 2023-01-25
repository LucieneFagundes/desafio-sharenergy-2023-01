import { IRandomUser } from '@infra/external-api/dtos/random-user.interface';
import { RandomUserService } from '@infra/external-api/random-user/random-user.service';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('random-user')
export class RandomUserController {
  constructor(private randomUserService: RandomUserService) {}

  @Get(':page')
  async getRandomUser(@Res() res: any, @Param('page') page: number) {
    const result = await this.randomUserService.execute(page);
    return res.json(result);
  }
}
