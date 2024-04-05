import { Injectable } from '@nestjs/common';
import { CreateGetMatchesStatisticDto } from './dto/create-get-matches-statistic.dto';
import { UpdateGetMatchesStatisticDto } from './dto/update-get-matches-statistic.dto';
import { HLTV } from 'hltv';

import { HLTV as HLTVNEXT } from 'hltv-next';
import * as HLTVAPI from '@ma-ve/hltv-api';

@Injectable()
export class GetMatchesStatisticsService {
  getMatches() {
    return HLTV.getMatches();
  }

  async getMatch(id: number) {
    const response = await HLTV.getMatch({ id });

    const eventName = response.event.name.toLowerCase().replaceAll(' ', '-');

    const newTeam1 = response.team1.name.toLowerCase().replaceAll(' ', '-');

    const newTeam2 = response.team2.name.toLowerCase().replaceAll(' ', '-');

    const newUri = `${newTeam1}-${newTeam2}-${eventName}`;

    const hasMap = response.maps.every((map) => map.name !== 'tba');
    console.log(hasMap);

    return { newUri, ...response, hasMap };
  }

  getMatchesStats(startDate: string, endDate: string) {
    return HLTV.getMatchesStats({ startDate, endDate });
  }

  getMatchStats(id: number) {
    return HLTVNEXT.getMatchStats({ id });

    return HLTV.getMatchStats({ id });
  }
  getMatchMapStats(id: number) {
    console.log('bateu?');

    return HLTVNEXT.getMatchMapStats({ id });
    return HLTV.getMatchMapStats({ id });
  }
}
