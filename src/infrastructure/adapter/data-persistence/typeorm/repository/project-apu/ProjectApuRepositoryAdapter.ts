import {
  ApuProjectDto,
  CreateApuProjectDto,
} from '@core/domain/project-apu/dto/index';
import { ProjectApuEntity } from '@core/domain/project-apu/entity/ProjectApuEntity';
import IProjectApuRepository from '@core/domain/project-apu/interface/ProjectApuInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectApu } from '../../entity/project-apu/index';
import { ProjectApuMapper } from '../../entity/project-apu/mapper/ProjectApuMapper';

@Injectable()
export default class ProjectApuRepositoryAdapter
  implements IProjectApuRepository
{
  constructor(
    @InjectRepository(ProjectApu)
    private readonly apuRepository: Repository<ProjectApu>,
  ) {}

  public async createBatch(
    projectApu: ProjectApuEntity[],
  ): Promise<ApuProjectDto[]> {
    const newApu = this.apuRepository.create(projectApu);
    const apu = await this.apuRepository.save(newApu);
    const payload: ApuProjectDto[] = ProjectApuMapper.toOrmDomainDtos(apu);

    return payload;
  }

  public async create(apuDto: CreateApuProjectDto): Promise<ApuProjectDto> {
    const newApu = this.apuRepository.create(apuDto);
    const apu = await this.apuRepository.save(newApu);
    const domainApu: ApuProjectDto = ProjectApuMapper.toOrmDomainDto(apu);

    return domainApu;
  }

  public updateUser(apu: any): Promise<CreateApuProjectDto> {
    throw new Error(`Method not implemented.${{ apu }}`);
  }
}
