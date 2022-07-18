import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';

export class DisciplineDto {
  id: number;

  name: string;

  code: string;

  description: string;

  areas?: AreaEntity[];

  budget: BudgetEntity;
}
