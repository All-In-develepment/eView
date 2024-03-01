import { PartialType } from '@nestjs/mapped-types';
import { CreateGetTeamStatisticDto } from './create-get-team-statistic.dto';

export class UpdateGetTeamStatisticDto extends PartialType(CreateGetTeamStatisticDto) {}
