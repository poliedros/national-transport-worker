import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiService } from './api/api.service';
import { RedisService } from './redis/redis.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const apiService = app.get(ApiService);
  const redisService = app.get(RedisService);

  console.log('fetching data from api...');
  const res = await apiService.get();

  console.log('saving data on cache...');
  await redisService.save(res);

  console.log('closing...');
  await app.close();
}
bootstrap();
