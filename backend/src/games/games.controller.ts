import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly GamesService: GamesService) {}
    
    @Get()
    getGames(): Promise<any> {
        return this.GamesService.getGames();
    }
}
