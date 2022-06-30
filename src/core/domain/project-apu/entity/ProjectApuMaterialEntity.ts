/* eslint-disable import/no-cycle */
import { MaterialEntity } from '@core/domain/master/entity/MaterialEntity';

import { ProjectApuEntity } from './ProjectApuEntity';

export class ProjectApuMaterialEntity {
  id: number;

  unitPrice: number;

  unitPriceFactored: number;

  quantity: number;

  quantitymt: number;

  factor: number;

  projectApu: ProjectApuEntity;

  material: MaterialEntity;
}
