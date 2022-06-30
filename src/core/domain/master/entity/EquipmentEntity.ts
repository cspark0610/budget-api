import { ProjectApuEquipmentEntity } from '@core/domain/project-apu/entity/ProjectApuEquipmentEntity';

export class EquipmentEntity {
  id: number;

  code: string;

  description: string;

  unit: string;

  projectApuEquipment: Array<ProjectApuEquipmentEntity>;
}
