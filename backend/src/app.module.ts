import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesService } from './games/games.service';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';
import { GetStatisticsModule } from './get-statistics/get-statistics.module';
import { GetTeamStatisticsModule } from './get-team-statistics/get-team-statistics.module';
import { GetMatchesStatisticsModule } from './get-matches-statistics/get-matches-statistics.module';

@Module({
  imports: [
    GamesModule,
    GetStatisticsModule,
    GetTeamStatisticsModule,
    GetMatchesStatisticsModule,
  ],
  controllers: [AppController, GamesController],
  providers: [AppService, GamesService],
})
export class AppModule {}
