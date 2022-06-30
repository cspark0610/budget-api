import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { ProjectApuEntity } from '@core/domain/project-apu/entity/ProjectApuEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';

export class DisciplineEntity {
  id: number;

  code: string;

  name: string;

  description: string;

  apus: ProjectApuEntity[];

  areas: AreaEntity[];

  budget: BudgetEntity;
}
