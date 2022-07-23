import { CacheModule, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import type { ClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      auth_pass: process.env.REDIS_AUTH_PASS,
    }),
  ],
  providers: [RedisService],
})
export class RedisModule {}
