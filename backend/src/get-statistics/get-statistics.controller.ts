import { Controller, Get, Param } from '@nestjs/common';
import { GetStatisticsService } from './get-statistics.service';

@Controller('get-statistics')
export class GetStatisticsController {
  constructor(private readonly getStatisticsService: GetStatisticsService) {}

  // Rota get com paramentro gameId que será passado na url
  @Get(':gameId')
  getStatistics(@Param('gameId')gameId: number): Promise<any> {
    return this.getStatisticsService.getStatistics(gameId);
  }
  
}
