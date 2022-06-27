import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuEquipmentDto,
} from '../../../domain/project-apu/dto/index';
import ApuEquipmentInterface from '../../../domain/project-apu/interface/ApuEquipmentInterface';

export default class CreateApuEquipmentService {
  constructor(private readonly apuEquipmentInterface: ApuEquipmentInterface) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuEquipmentDto[]> {
    const apuEquipment = await this.apuEquipmentInterface.create(dto, apu);

    return apuEquipment;
  }
}
