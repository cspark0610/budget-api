import { ProjectApuSubContractEntity } from '@core/domain/project-apu/entity/ProjectApuSubcontractEntity';

export class SubContractEntity {
  id: number;

  code: string;

  description: string;

  unit: string;

  projectApuSubcontract: Array<ProjectApuSubContractEntity>;
}
