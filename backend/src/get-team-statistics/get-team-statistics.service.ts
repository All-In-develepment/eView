import { Injectable } from '@nestjs/common';
import { CreateGetTeamStatisticDto } from './dto/create-get-team-statistic.dto';
import { UpdateGetTeamStatisticDto } from './dto/update-get-team-statistic.dto';
import { HLTV } from 'hltv';

@Injectable()
export class GetTeamStatisticsService {
  getTeam(id: number) {
    return HLTV.getTeam({ id });
  }

  getTeamStats(id: number) {
    return HLTV.getTeamStats({ id });
  }

  update(id: number, updateGetTeamStatisticDto: UpdateGetTeamStatisticDto) {
    return `This action updates a #${id} getTeamStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} getTeamStatistic`;
  }
}

/*
todos os jogos      *
jogos selecionados  *
  - times           
  - horarios
  - ao vivo ou nao
  - lineups
  - mapas selecionados
*/
