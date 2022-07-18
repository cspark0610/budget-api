import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';

export class ProjectAreaDto {
  id: number;

  name: string;

  code: string;

  description: string;

  budget: BudgetEntity;
}
