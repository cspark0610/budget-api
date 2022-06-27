import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuSubcontractDto,
} from '@core/domain/project-apu/dto/index';
import IApuSubcontractRepository from '@core/domain/project-apu/interface/ApuSubcontractInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectApuSubcontract } from '../../entity/project-apu/index';
import { ApuSubcontractMapper } from '../../entity/project-apu/mapper/ApuSubcontractMapper';

@Injectable()
export default class ApuSubcontractRepositoryAdapter
  implements IApuSubcontractRepository
{
  constructor(
    @InjectRepository(ProjectApuSubcontract)
    private readonly apuSubcontractRepository: Repository<ProjectApuSubcontract>,
  ) {}

  public async create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuSubcontractDto[]> {
    const arrSubcontract = ApuSubcontractMapper.toDomainEntity(dto, apu);
    const newDataEq = await this.apuSubcontractRepository.save(arrSubcontract);
    const apuSubcontractDto = ApuSubcontractMapper.toEntityDomain(newDataEq);

    return apuSubcontractDto;
  }
}
