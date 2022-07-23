import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async save(data: any) {
    await this.cacheManager.set('NATIONAL_TRANSPORT_DATA', data, { ttl: 300 });
  }
}
