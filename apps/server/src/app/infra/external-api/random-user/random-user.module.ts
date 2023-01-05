import { RandomUserService } from './random-user.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [HttpModule],
  providers: [RandomUserService],
  exports: [RandomUserService],
})
export class RandomUserModule {}
