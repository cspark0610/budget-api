import {
  ApuProjectDto,
  CreateApuProjectDto,
} from '@core/domain/project-apu/dto/index';
import ApuEquipmentInterface from '@core/domain/project-apu/interface/ApuEquipmentInterface';
import ApuMaterialInterface from '@core/domain/project-apu/interface/ApuMaterialInterface';
import ApuSubcontractInterface from '@core/domain/project-apu/interface/ApuSubcontractInterface';
import ApuWorkforceInterface from '@core/domain/project-apu/interface/ApuWorkforceInterface';
import ProjectApuInterface from '@core/domain/project-apu/interface/ProjectApuInterface';

export default class CreateProjectApuService {
  constructor(
    private readonly projectApuInterface: ProjectApuInterface,
    private readonly apuEquipmentInterface: ApuEquipmentInterface,
    private readonly apuMaterialInterface: ApuMaterialInterface,
    private readonly apuSubcontractInterface: ApuSubcontractInterface,
    private readonly apuWorkforceInterface: ApuWorkforceInterface,
  ) {}

  public async create(apuDto: CreateApuProjectDto): Promise<ApuProjectDto> {
    const apu = await this.projectApuInterface.create(apuDto);
    await this.apuEquipmentInterface.create(apuDto, apu);
    await this.apuMaterialInterface.create(apuDto, apu);
    await this.apuSubcontractInterface.create(apuDto, apu);
    await this.apuWorkforceInterface.create(apuDto, apu);

    return apu;
  }
}
