import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GetPlayerService } from './get-player.service';
import { CreateGetPlayerDto } from './dto/create-get-player.dto';
import { UpdateGetPlayerDto } from './dto/update-get-player.dto';

@Controller('get-player')
export class GetPlayerController {
  constructor(private readonly getPlayerService: GetPlayerService) {}

  @Get(':id')
  getPlayer(@Param('id') id: string) {
    return this.getPlayerService.getPlayer(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);

    return this.getPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGetPlayerDto: UpdateGetPlayerDto,
  ) {
    return this.getPlayerService.update(+id, updateGetPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getPlayerService.remove(+id);
  }
}
