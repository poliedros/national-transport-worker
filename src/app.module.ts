import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [ApiModule, RedisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
