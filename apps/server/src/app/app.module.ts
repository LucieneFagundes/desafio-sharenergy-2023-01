import { HttpCatModule } from './infra/external-api/http-cats/http-cat.module';
import { RandomUserModule } from './infra/external-api/random-user/random-user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpCatModule, AuthModule, HttpModule, DatabaseModule],
})
export class AppModule {}
