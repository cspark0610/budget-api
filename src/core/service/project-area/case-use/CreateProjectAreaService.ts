import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { DataImportEntity } from '@core/domain/project-apu/entity/type/DataImportEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import ProjectAreaInterface from '@core/domain/project-area/interface/ProjectAreaInterface';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export default class CreateProjectAreaService {
  constructor(private readonly projectAreaInterface: ProjectAreaInterface) {}

  public async create(dto: CreateAreaProjectDto): Promise<AreaEntity> {
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
