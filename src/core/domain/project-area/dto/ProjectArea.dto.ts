import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';

export class CreateAreaProjectDto {
  @IsString()
  @ApiProperty({ uniqueItems: true })
  name: string;

  @ApiProperty({ uniqueItems: true })
  @IsString()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  budget: CreateBudgetDto;
}
