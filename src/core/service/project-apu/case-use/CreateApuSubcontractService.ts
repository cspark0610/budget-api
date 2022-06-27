import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuSubcontractDto,
} from '../../../domain/project-apu/dto/index';
import ApuSubcontractInterface from '../../../domain/project-apu/interface/ApuSubcontractInterface';

export default class CreateApuSubcontractService {
  constructor(
    private readonly apuSubcontractInterface: ApuSubcontractInterface,
  ) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuSubcontractDto[]> {
    const apuSubcontract = await this.apuSubcontractInterface.create(dto, apu);

    return apuSubcontract;
  }
}
