import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuMaterialDto,
} from '../../../domain/project-apu/dto/index';
import ApuMaterialInterface from '../../../domain/project-apu/interface/ApuMaterialInterface';

export default class CreateApuMaterialService {
  constructor(private readonly apuMaterialInterface: ApuMaterialInterface) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuMaterialDto[]> {
    const apuMaterial = await this.apuMaterialInterface.create(dto, apu);

    return apuMaterial;
  }
}
