/* eslint-disable import/no-cycle */
import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { DepartureEntity } from '@core/domain/master/entity/DepartureEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import { DisciplineEntity } from '@core/domain/project-discipline/entity/DisciplineEntity';

import { ProjectApuEquipmentEntity } from './ProjectApuEquipmentEntity';
import { ProjectApuMaterialEntity } from './ProjectApuMaterialEntity';
import { ProjectApuSubContractEntity } from './ProjectApuSubcontractEntity';
import { ProjectApuWorkforceEntity } from './ProjectApuWorkforceEntity';

export class ProjectApuEntity {
  id: number;

  unitPrice: number;

  partialHH: number;

  efficiency_MO: number;

  efficiency_EQ: number;

  status: string;

  idApuProfile: number;

  measured: number;

  /* ======= RELATIONS ======= */

  budget: BudgetEntity;

  projectApuEquipment: Array<ProjectApuEquipmentEntity>;

  projectApuMaterial: Array<ProjectApuMaterialEntity>;

  projectApuSubcontract: Array<ProjectApuSubContractEntity>;

  projectApuWorkforce: Array<ProjectApuWorkforceEntity>;

  departure: DepartureEntity;

  area: AreaEntity;

  discipline: DisciplineEntity;
}
