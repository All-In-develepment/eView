import { Injectable } from '@nestjs/common';
import { HLTV } from 'hltv';

@Injectable()
export class GamesService {
    getGames(): Promise<any> {
        return HLTV.getMatches();
    }
}
