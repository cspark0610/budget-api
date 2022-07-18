import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  @ApiProperty({ uniqueItems: true })
  name: string;

  @ApiProperty({ uniqueItems: true })
  @IsString()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  budget: BudgetEntity;
}
