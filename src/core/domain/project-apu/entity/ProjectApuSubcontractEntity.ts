/* eslint-disable import/no-cycle */
import { SubContractEntity } from '@core/domain/master/entity/SubContractEntity';

import { ProjectApuEntity } from './ProjectApuEntity';

export class ProjectApuSubContractEntity {
  id: number;

  unitPrice: number;

  unitPriceFactored: number;

  quantity: number;

  quantitymt: number;

  factor: number;

  projectApu: ProjectApuEntity;

  subcontract: SubContractEntity;
}
