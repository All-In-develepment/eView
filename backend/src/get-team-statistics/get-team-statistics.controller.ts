import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GetTeamStatisticsService } from './get-team-statistics.service';
import { CreateGetTeamStatisticDto } from './dto/create-get-team-statistic.dto';
import { UpdateGetTeamStatisticDto } from './dto/update-get-team-statistic.dto';

@Controller('get-team-statistics')
export class GetTeamStatisticsController {
  constructor(private readonly getTeamStatisticsService: GetTeamStatisticsService) {}

  @Post()
  create(@Body() createGetTeamStatisticDto: CreateGetTeamStatisticDto) {
    return this.getTeamStatisticsService.create(createGetTeamStatisticDto);
  }

  @Get()
  findAll() {
    return this.getTeamStatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getTeamStatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetTeamStatisticDto: UpdateGetTeamStatisticDto) {
    return this.getTeamStatisticsService.update(+id, updateGetTeamStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getTeamStatisticsService.remove(+id);
  }
}
