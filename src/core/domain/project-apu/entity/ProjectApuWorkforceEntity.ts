/* eslint-disable import/no-cycle */
import { WorkForceEntity } from '@core/domain/master/entity/WorkforceEntity';

import { ProjectApuEntity } from './ProjectApuEntity';

export class ProjectApuWorkforceEntity {
  id: number;

  unitPrice: number;

  unitPriceFactored: number;

  quadrille: number;

  quantitymt: number;

  factor: number;

  projectApu: ProjectApuEntity;

  workforce: WorkForceEntity;
}
