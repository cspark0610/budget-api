import { PartialType } from '@nestjs/swagger';

import { CreateBudgetDto } from './CreateBudget.dto';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {}
