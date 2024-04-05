import { PartialType } from '@nestjs/mapped-types';
import { CreateGetPlayerDto } from './create-get-player.dto';

export class UpdateGetPlayerDto extends PartialType(CreateGetPlayerDto) {}
