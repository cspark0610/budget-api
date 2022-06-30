import { ProjectApuWorkforceEntity } from '@core/domain/project-apu/entity/ProjectApuWorkforceEntity';

export class WorkForceEntity {
  id: number;

  code: string;

  description: string;

  unit: string;

  projectApuWorkforce: Array<ProjectApuWorkforceEntity>;
}
