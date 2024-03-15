import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { GetMatchesStatisticsService } from './get-matches-statistics.service';
import { CreateGetMatchesStatisticDto } from './dto/create-get-matches-statistic.dto';
import { UpdateGetMatchesStatisticDto } from './dto/update-get-matches-statistic.dto';

@Controller('get-matches-statistics')
export class GetMatchesStatisticsController {
  constructor(
    private readonly getMatchesStatisticsService: GetMatchesStatisticsService,
  ) {}

  @Get()
  getMatches() {
    return this.getMatchesStatisticsService.getMatches();
  }

  @Get('stats')
  getMatchesStats(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.getMatchesStatisticsService.getMatchesStats(startDate, endDate);
  }

  @Get(':id')
  getMatch(@Param('id') id: string) {
    return this.getMatchesStatisticsService.getMatch(+id);
  }

  @Get('stats/:id')
  getMatchStats(@Param('id') id: string) {
    return this.getMatchesStatisticsService.getMatchStats(+id);
  }
  @Get('match/stats/:id')
  getMatchMapStats(@Param('id') id: string) {
    return this.getMatchesStatisticsService.getMatchMapStats(+id);
  }
}
