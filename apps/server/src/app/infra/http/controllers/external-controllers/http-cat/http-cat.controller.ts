import { HttpCatService } from '@infra/external-api/http-cats/http-cat.service';
import { Controller, UseGuards } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('http-cat')
export class HttpCatController {
  constructor(private httpCatService: HttpCatService) {}

  @Get(':code')
  async getCat(@Param('code') code: number) {
    const response = await this.httpCatService.execute(code);

    return response;
  }
}
