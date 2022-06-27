import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuWorkforceDto,
} from '../../../domain/project-apu/dto/index';
import ApuWorkforceInterface from '../../../domain/project-apu/interface/ApuWorkforceInterface';

export default class CreateApuWorkforceService {
  constructor(private readonly apuWorkforceInterface: ApuWorkforceInterface) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuWorkforceDto[]> {
    const apuWorkforce = await this.apuWorkforceInterface.create(dto, apu);

    return apuWorkforce;
  }
}
