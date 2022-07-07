/* eslint-disable import/order */
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import IProjectAreaRepository from '@core/domain/project-area/interface/ProjectAreaInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';

import { ProjectAreaMapper } from '../../entity/project-area/mapper/ProjectAreaMapper';

import { ProjectArea } from '../../entity/project-area/ProjectArea.entity';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

@Injectable()
export default class ProjectAreaRepositoryAdapter
  implements IProjectAreaRepository
{
  constructor(
    @InjectRepository(ProjectArea)
    private readonly projectAreaRepository: Repository<ProjectArea>,
  ) {}

  public async create(dto: CreateAreaProjectDto): Promise<AreaEntity> {
    const newArea = this.projectAreaRepository.create(dto);
    const payload = await this.projectAreaRepository.save(newArea);
    const area = ProjectAreaMapper.toOrmEntityDomain(payload);

    return area;
  }

  public async findByName(name: string, budgetId: number): Promise<AreaEntity> {
    const data = await this.projectAreaRepository.findOne({
      where: {
        name: Raw(
          (alias) => `unaccent(lower(${alias})) = unaccent(lower(:name))`,
          {
            name,
          },
        ),
        budget: { id: budgetId },
      },
    });
    const area = ProjectAreaMapper.toOrmEntityDomain(data);

    return area;
  }
}
