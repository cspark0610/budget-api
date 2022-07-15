import { PartialType } from '@nestjs/swagger';

import { CreateAreaProjectDto } from './ProjectArea.dto';

export class UpdateAreaDto extends PartialType(CreateAreaProjectDto) {}
