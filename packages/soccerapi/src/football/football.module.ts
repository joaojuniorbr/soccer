import { Module } from '@nestjs/common';
import { FootballService } from './football.service';
import { FootballController } from './football.controller';

@Module({
  providers: [FootballService],
  exports: [FootballService],
  controllers: [FootballController],
})
export class FootballModule {}
