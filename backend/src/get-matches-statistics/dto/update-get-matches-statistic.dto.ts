import { PartialType } from '@nestjs/mapped-types';
import { CreateGetMatchesStatisticDto } from './create-get-matches-statistic.dto';

export class UpdateGetMatchesStatisticDto extends PartialType(CreateGetMatchesStatisticDto) {}
