import { Module } from '@nestjs/common';
import { GetMatchesStatisticsService } from './get-matches-statistics.service';
import { GetMatchesStatisticsController } from './get-matches-statistics.controller';

@Module({
  controllers: [GetMatchesStatisticsController],
  providers: [GetMatchesStatisticsService],
})
export class GetMatchesStatisticsModule {}
