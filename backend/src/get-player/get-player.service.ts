import { Injectable } from '@nestjs/common';
import { CreateGetPlayerDto } from './dto/create-get-player.dto';
import { UpdateGetPlayerDto } from './dto/update-get-player.dto';
import { HLTV } from 'hltv';

@Injectable()
export class GetPlayerService {
  getPlayer(id: number) {
    return HLTV.getPlayer({ id });
  }

  findAll() {
    return `This action returns all getPlayer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} getPlayer`;
  }

  update(id: number, updateGetPlayerDto: UpdateGetPlayerDto) {
    return `This action updates a #${id} getPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} getPlayer`;
  }
}
