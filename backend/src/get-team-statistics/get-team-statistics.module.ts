import { Module } from '@nestjs/common';
import { GetTeamStatisticsService } from './get-team-statistics.service';
import { GetTeamStatisticsController } from './get-team-statistics.controller';

@Module({
  controllers: [GetTeamStatisticsController],
  providers: [GetTeamStatisticsService],
})
export class GetTeamStatisticsModule {}
