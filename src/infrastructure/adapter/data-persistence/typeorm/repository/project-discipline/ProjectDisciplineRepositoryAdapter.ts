/* eslint-disable import/order */
import { DisciplineEntity } from '@core/domain/project-discipline/entity/DisciplineEntity';
import IProjectDisciplineRepository from '@core/domain/project-Discipline/interface/ProjectDisciplineInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';

import { ProjectDisciplineMapper } from '../../entity/project-Discipline/mapper/ProjectDisciplineMapper';

import { ProjectDiscipline } from '../../entity/project-Discipline/ProjectDiscipline.entity';

import { CreateDisciplineDto } from '@core/domain/project-discipline/dto/CreateDiscipline.dto';
import { DisciplineDto } from '@core/domain/project-Discipline/dto/Discipline.dto';

@Injectable()
export default class ProjectDisciplineRepositoryAdapter
  implements IProjectDisciplineRepository
{
  constructor(
    @InjectRepository(ProjectDiscipline)
    private readonly projectDisciplineRepository: Repository<ProjectDiscipline>,
  ) {}

  async findByName(name: string, budget: number): Promise<DisciplineEntity> {
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
      relations: ['areas'],
    });
    const discipline = ProjectDisciplineMapper.toOrmDomainEntity(data);

    return discipline;
  }

  public async create(dto: CreateDisciplineDto): Promise<DisciplineEntity> {
    const newDiscipline = this.projectDisciplineRepository.create(dto);
    const newData = await this.projectDisciplineRepository.save(newDiscipline);
    const disciplineDto = ProjectDisciplineMapper.toOrmDomainEntity(newData);

    return disciplineDto;
  }
}
