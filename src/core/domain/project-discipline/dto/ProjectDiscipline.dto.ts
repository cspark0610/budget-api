// import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateDisciplineProjectDto {
  @IsString()
  @ApiProperty({ uniqueItems: true })
  name: string;

  @IsString()
  @ApiProperty({ uniqueItems: true })
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  areas?: AreaEntity[];

  budget: BudgetEntity;
}
