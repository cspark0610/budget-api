import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { DataImportEntity } from '@core/domain/project-apu/entity/type/DataImportEntity';
import { ProjectAreaDITokens } from '@core/domain/project-area/di/ProjectAreaDITokens';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import ProjectAreaInterface from '@core/domain/project-area/interface/ProjectAreaInterface';
import { Inject } from '@nestjs/common';

import { CreateAreaDto } from '@core/domain/project-area/dto/CreateArea.dto';

export default class CreateProjectAreaService {
  constructor(
    @Inject(ProjectAreaDITokens.CreateAreaRepository)
    private readonly projectAreaInterface: ProjectAreaInterface,
  ) {}

  public async create(dto: CreateAreaDto): Promise<AreaEntity> {
    const projectArea = await this.projectAreaInterface.create(dto);

    return projectArea;
  }

  async creationBatchArea(
    data: DataImportEntity,
    budget: BudgetEntity,
  ): Promise<AreaEntity[]> {
    const areas = await Promise.all(
      data.areas.map((el) =>
        this.create({
          ...el,
          budget,
        }),
      ),
    );

    return areas;
  }
}
