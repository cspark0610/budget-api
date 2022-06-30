import { ProjectApuMaterialEntity } from '@core/domain/project-apu/entity/ProjectApuMaterialEntity';

export class MaterialEntity {
  id: number;

  code: string;

  description: string;

  unit: string;

  projectApuMaterial: Array<ProjectApuMaterialEntity>;
}
