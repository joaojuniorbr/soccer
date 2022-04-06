import { Injectable } from '@nestjs/common';

import axios from 'axios';

// Api documentation: https://www.api-football.com/documentation-v3

@Injectable()
export class FootballService {
  api() {
    return axios.create({
      baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_FOOTBALL_KEY,
      },
    });
  }

  async get(url: string, params: object) {
    const response = await this.api().get(url, {
      params,
    });

    return response.data;
  }
}
