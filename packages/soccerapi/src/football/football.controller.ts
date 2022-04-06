import { Body, Controller, Post } from '@nestjs/common';
import { FootballService } from './football.service';

@Controller('football')
export class FootballController {
  constructor(private footballService: FootballService) {}

  @Post()
  async info(@Body() api: { url: string; params: object }) {
    const response = await this.footballService.get(api.url, api.params);
    return response;
  }
}
