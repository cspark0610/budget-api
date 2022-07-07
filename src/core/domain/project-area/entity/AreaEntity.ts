import { ProjectApuEntity } from '@core/domain/project-apu/entity/ProjectApuEntity';

export class AreaEntity {
  id: number;

  code: string;

  name: string;

  description: string;

  apus: ProjectApuEntity[];

  budgetId: number;
}
