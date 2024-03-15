import { Injectable } from '@nestjs/common';
import { CreateGetMatchesStatisticDto } from './dto/create-get-matches-statistic.dto';
import { UpdateGetMatchesStatisticDto } from './dto/update-get-matches-statistic.dto';
import { HLTV } from 'hltv';
import * as HLTVAPI from '@ma-ve/hltv-api';

@Injectable()
export class GetMatchesStatisticsService {
  getMatches() {
    return HLTV.getMatches();
  }

  getMatch(id: number) {
    return HLTV.getMatch({ id });
  }

  getMatchesStats(startDate: string, endDate: string) {
    return HLTV.getMatchesStats({ startDate, endDate });
  }

  getMatchStats(id: number) {
    return HLTV.getMatchStats({ id });
  }
  getMatchMapStats(id: number) {
    return HLTV.getMatchMapStats({ id });
  }
}
