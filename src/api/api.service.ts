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
            'X-API-KEY': `${process.env.NATIONAL_TRANSPORT_TOKEN}`,
          },
        },
      ),
    );

    return res.data;
  }
}
