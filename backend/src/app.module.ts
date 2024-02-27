import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesService } from './games/games.service';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [GamesModule, TesteModule],
  controllers: [AppController, GamesController],
  providers: [AppService, GamesService],
})
export class AppModule {}
