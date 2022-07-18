import { PartialType } from '@nestjs/swagger';

import { CreateDepartureDto } from './CreateDeparture.dto';

export class UpdateDepartureDto extends PartialType(CreateDepartureDto) {}
