/* eslint-disable import/order */
import { UpdateAreaDto } from '@core/domain/project-area/dto';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import IProjectAreaRepository from '@core/domain/project-area/interface/ProjectAreaInterface';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';

import { ProjectAreaMapper } from '../../entity/project-area/mapper/ProjectAreaMapper';

import { ProjectArea } from '../../entity/project-area/ProjectArea.entity';

import { CreateAreaDto } from '@core/domain/project-area/dto/CreateArea.dto';

@Injectable()
export default class ProjectAreaRepositoryAdapter
  implements IProjectAreaRepository
{
  constructor(
    @InjectRepository(ProjectArea)
    private readonly projectAreaRepository: Repository<ProjectArea>,
  ) {}


  public async create(dto: CreateAreaDto): Promise<AreaEntity> {

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

  public async findById(id: number): Promise<CreateAreaProjectDto> {
    const area = await this.projectAreaRepository.findOne({
      where: { id },
    });
    const newArea = ProjectAreaMapper.toOrmEntityDomain(area);
    return newArea;
  }

  public async findByCode(code: string): Promise<boolean> {
    const data = await this.projectAreaRepository.find({
      where: { code },
    });
    return data.length > 0;
  }

  public async update(id: number, dto: UpdateAreaDto) {
    const findArea = await this.findByName(dto.name, dto.budgetId);
    if (Object.keys(findArea).length) {
      throw new BadRequestException(`Name already exists in Area`);
    }
    const area = await this.findById(id);
    if (!area) throw new NotFoundException('Area not found');

    const editedArea = Object.assign(area, dto);
    return this.projectAreaRepository.save(editedArea);
  }
}
