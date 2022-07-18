import { DataImportEntity } from '@core/domain/project-apu/entity/type/DataImportEntity';
import { ProjecAreaDITokens } from '@core/domain/project-area/di/ProjectAreaDITokens';
import { UpdateAreaDto } from '@core/domain/project-area/dto';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import ProjectAreaInterface from '@core/domain/project-area/interface/ProjectAreaInterface';
import { Inject } from '@nestjs/common';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export default class CreateProjectAreaService {
  constructor(
    @Inject(ProjecAreaDITokens.ProjectAreaRepository)
    private readonly projectAreaInterface: ProjectAreaInterface,
  ) {}

  public async create(dto: CreateAreaProjectDto): Promise<AreaEntity> {
    const projectArea = await this.projectAreaInterface.create(dto);

    return projectArea;
  }

  async creationBatchArea(
    data: DataImportEntity,
    budgetId: number,
  ): Promise<AreaEntity[]> {
    const areas = await Promise.all(
      data.areas.map((el) =>
        this.create({
          ...el,
          budgetId,
        }),
      ),
    );

    return areas;
  }

  public async findById(id: number): Promise<CreateAreaProjectDto> {
    const budget = await this.projectAreaInterface.findById(id);

    return budget;
  }

  public async findByCode(code: string): Promise<CreateAreaProjectDto> {
    const budget = await this.projectAreaInterface.findByCode(code);

    return budget;
  }

  public async update(id: number, dto: UpdateAreaDto): Promise<UpdateAreaDto> {
    const budget = await this.projectAreaInterface.update(id, dto);

    return budget;
  }
}
