import {
  ApuProjectDto,
  CreateApuProjectDto,
} from '@core/domain/project-apu/dto/index';
import IProjectApuRepository from '@core/domain/project-apu/interface/ProjectApuInterface';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';

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

  public async create(apuDto: CreateApuProjectDto): Promise<ApuProjectDto> {
    const newApu = this.apuRepository.create(apuDto);
    const apu = await this.apuRepository.save(newApu);
    const domainApu: ApuProjectDto = ProjectApuMapper.toDomainEntity(apu);

    return domainApu;
  }

  public updateUser(apu: any): Promise<CreateApuProjectDto> {
    throw new Error(`Method not implemented.${{ apu }}`);
  }
}
