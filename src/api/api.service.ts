import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async get() {
    const res = await firstValueFrom(
      this.httpService.get(
        'https://api.nationaltransport.ie/gtfsr/v1?format=json',
        {
          headers: {
            'X-API-KEY': '924e833c1f334b19a6c38f422e0ec34a',
          },
        },
      ),
    );

    return res.data;
  }
}
