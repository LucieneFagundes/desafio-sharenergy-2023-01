import { HttpCatService } from '@infra/external-api/http-cats/http-cat.service';
import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

@Controller('http-cat')
export class HttpCatController {
  constructor(private httpCatService: HttpCatService) {}

  @Get(':code')
  async getCat(@Param('code') code: number) {
    const response = await this.httpCatService.execute(code);

    return response;
  }
}
