import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuEquipmentDto,
} from '@core/domain/project-apu/dto/index';
import IApuEquipmentRepository from '@core/domain/project-apu/interface/ApuEquipmentInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectApuEquipment } from '../../entity/project-apu/index';
import { ApuEquipmentMapper } from '../../entity/project-apu/mapper/ApuEquipmentMapper';

@Injectable()
export default class ApuEquipmentRepositoryAdapter
  implements IApuEquipmentRepository
{
  constructor(
    @InjectRepository(ProjectApuEquipment)
    private readonly apuEquipmentRepository: Repository<ProjectApuEquipment>,
  ) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuEquipmentDto[]> {
    const arrEquipment = ApuEquipmentMapper.toDomainEntity(dto, apu);
    const newDataEq = await this.apuEquipmentRepository.save(arrEquipment);
    const apuEquipmentDto = ApuEquipmentMapper.toEntityDomain(newDataEq);

    return apuEquipmentDto;
  }
}
