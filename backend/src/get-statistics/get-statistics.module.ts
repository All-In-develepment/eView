import { Module } from '@nestjs/common';
import { GetStatisticsService } from './get-statistics.service';
import { GetStatisticsController } from './get-statistics.controller';

@Module({
  controllers: [GetStatisticsController],
  providers: [GetStatisticsService],
})
export class GetStatisticsModule {}
