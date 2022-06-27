import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuWorkforceDto,
} from '@core/domain/project-apu/dto/index';
import IApuWorkforceRepository from '@core/domain/project-apu/interface/ApuWorkforceInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectApuWorkforce } from '../../entity/project-apu/index';
import { ApuWorkforceMapper } from '../../entity/project-apu/mapper/ApuWorkforceMapper';

@Injectable()
export default class ApuWorkforceRepositoryAdapter
  implements IApuWorkforceRepository
{
  constructor(
    @InjectRepository(ProjectApuWorkforce)
    private readonly apuWorkforceRepository: Repository<ProjectApuWorkforce>,
  ) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuWorkforceDto[]> {
    const arrWorkforce = ApuWorkforceMapper.toDomainEntity(dto, apu);
    const newDataEq = await this.apuWorkforceRepository.save(arrWorkforce);
    const apuWorkforceDto = ApuWorkforceMapper.toEntityDomain(newDataEq);

    return apuWorkforceDto;
  }
}
