import { ProjectApuEntity } from '@core/domain/project-apu/entity/ProjectApuEntity';

export class DepartureEntity {
  id: number;

  name: string;

  code: string;

  description: string;

  unit: string;

  apus: ProjectApuEntity[];
}
