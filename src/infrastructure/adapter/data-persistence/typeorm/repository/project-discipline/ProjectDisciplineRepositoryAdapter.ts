/* eslint-disable import/order */
import IProjectDisciplineRepository from '@core/domain/project-Discipline/interface/ProjectDisciplineInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';

import { ProjectDisciplineMapper } from '../../entity/project-Discipline/mapper/ProjectDisciplineMapper';

import { ProjectDiscipline } from '../../entity/project-Discipline/ProjectDiscipline.entity';

import { CreateDisciplineProjectDto } from '@core/domain/project-Discipline/dto/ProjectDiscipline.dto';

@Injectable()
export default class ProjectDisciplineRepositoryAdapter
  implements IProjectDisciplineRepository
{
  constructor(
    @InjectRepository(ProjectDiscipline)
    private readonly projectDisciplineRepository: Repository<ProjectDiscipline>,
  ) {}

  async findByName(
    name: string,
    budget: number,
  ): Promise<CreateDisciplineProjectDto> {
    const data = await this.projectDisciplineRepository.findOne({
      where: {
        name: Raw(
          (alias) => `unaccent(lower(${alias})) = unaccent(lower(:name))`,
          {
            name,
          },
        ),
        budget: { id: budget },
      },
    });
    const discipline = ProjectDisciplineMapper.toOrmDomainDto(data);

    return discipline;
  }

  public async create(
    dto: CreateDisciplineProjectDto,
  ): Promise<CreateDisciplineProjectDto> {
    const newDiscipline = this.projectDisciplineRepository.create(dto);
    const newData = await this.projectDisciplineRepository.save(newDiscipline);
    const DisciplineDto = ProjectDisciplineMapper.toOrmDomainDto(newData);

    return DisciplineDto;
  }
}
