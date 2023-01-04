import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [AuthModule, HttpModule, DatabaseModule],
})
export class AppModule {}
