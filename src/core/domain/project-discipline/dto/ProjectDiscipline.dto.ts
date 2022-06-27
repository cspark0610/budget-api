import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';
import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export class CreateDisciplineBProjectDto {
  @IsString()
  @ApiProperty({ uniqueItems: true })
  name: string;

  @IsString()
  @ApiProperty({ uniqueItems: true })
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  areas?: CreateAreaProjectDto[];

  budget: CreateBudgetDto;
}
