import { Module } from '@nestjs/common';
import { GetPlayerService } from './get-player.service';
import { GetPlayerController } from './get-player.controller';

@Module({
  controllers: [GetPlayerController],
  providers: [GetPlayerService],
})
export class GetPlayerModule {}
