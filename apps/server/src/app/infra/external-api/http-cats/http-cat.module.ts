import { HttpCatController } from '../../http/controllers/external-controllers/http-cat/http-cat.controller';
import { HttpCatService } from './http-cat.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [HttpCatService],
  exports: [HttpCatService],
})
export class HttpCatModule {}
