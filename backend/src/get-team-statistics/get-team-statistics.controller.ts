import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GetTeamStatisticsService } from './get-team-statistics.service';
import { CreateGetTeamStatisticDto } from './dto/create-get-team-statistic.dto';
import { UpdateGetTeamStatisticDto } from './dto/update-get-team-statistic.dto';

@Controller('get-team-statistics')
export class GetTeamStatisticsController {
  constructor(
    private readonly getTeamStatisticsService: GetTeamStatisticsService,
  ) {}

  @Get(':id')
  getMatch(@Param('id') id: string) {
    return this.getTeamStatisticsService.getTeam(+id);
  }
  @Get('stats/:id')
  getTeamStats(@Param('id') id: string) {
    return this.getTeamStatisticsService.getTeamStats(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGetTeamStatisticDto: UpdateGetTeamStatisticDto,
  ) {
    return this.getTeamStatisticsService.update(+id, updateGetTeamStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getTeamStatisticsService.remove(+id);
  }
}
