import { Injectable } from '@nestjs/common';
import { CreateGetTeamStatisticDto } from './dto/create-get-team-statistic.dto';
import { UpdateGetTeamStatisticDto } from './dto/update-get-team-statistic.dto';
import { HLTV } from 'hltv';

@Injectable()
export class GetTeamStatisticsService {
  create(createGetTeamStatisticDto: CreateGetTeamStatisticDto) {
    return 'This action adds a new getTeamStatistic';
  }

  findAll() {
    return `This action returns all getTeamStatistics`;
  }

  findOne(id: number) {
    return HLTV.getTeam({ id: id }); // Full
  }

  update(id: number, updateGetTeamStatisticDto: UpdateGetTeamStatisticDto) {
    return `This action updates a #${id} getTeamStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} getTeamStatistic`;
  }
}
