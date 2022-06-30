import { EquipmentEntity } from '@core/domain/master/entity/EquipmentEntity';
import { ProjectApuEntity } from '@core/domain/project-apu/entity/ProjectApuEntity';

export class ProjectApuEquipmentEntity {
  id: number;

  unitPrice: number;

  unitPriceFactored: number;

  quadrille: number;

  quantitymt: number;

  factor: number;

  projectApu: ProjectApuEntity;

  equipment: EquipmentEntity;
}
