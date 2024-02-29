import { Injectable } from '@nestjs/common';
import { HLTV } from 'hltv';

@Injectable()
export class GetStatisticsService {
    getStatistics(gameId: number): Promise<any> {
        // console.log(gameId)
        return HLTV.getMatchStats({ id: gameId });
    }
}
