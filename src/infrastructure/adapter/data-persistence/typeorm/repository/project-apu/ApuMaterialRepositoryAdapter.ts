import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuMaterialDto,
} from '@core/domain/project-apu/dto/index';
import IApuMaterialRepository from '@core/domain/project-apu/interface/ApuMaterialInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectApuMaterial } from '../../entity/project-apu/index';
import { ApuMaterialMapper } from '../../entity/project-apu/mapper/ApuMaterialMapper';

@Injectable()
export default class ApuMaterialRepositoryAdapter
  implements IApuMaterialRepository
{
  constructor(
    @InjectRepository(ProjectApuMaterial)
    private readonly apuMaterialRepository: Repository<ProjectApuMaterial>,
  ) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuMaterialDto[]> {
    const arrMaterial = ApuMaterialMapper.toDomainEntity(dto, apu);
    const newDataEq = await this.apuMaterialRepository.save(arrMaterial);
    const apuMaterialDto = ApuMaterialMapper.toEntityDomain(newDataEq);

    return apuMaterialDto;
  }
}
