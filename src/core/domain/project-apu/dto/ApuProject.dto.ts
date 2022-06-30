/* eslint-disable import/no-cycle */
import {
  ProjectApuEquipmentDto,
  ProjectApuMaterialDto,
  ProjectApuSubcontractDto,
  ProjectApuWorkforceDto,
} from './index';

export class ApuProjectDto {
  id: number;

  unitPrice: number;

  partialHH: number;

  efficiency_MO: number;

  efficiency_EQ: number;

  status: string;

  measured: number;

  idApuProfile: number;

  budgetId: number;

  apuProjectEquipment: ProjectApuEquipmentDto[];

  apuProjectMaterial: ProjectApuMaterialDto[];

  apuProjectSubcontract: ProjectApuSubcontractDto[];

  apuProjectWorkforce: ProjectApuWorkforceDto[];
}
