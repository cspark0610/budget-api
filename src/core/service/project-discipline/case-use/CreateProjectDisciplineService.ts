/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { DataImportEntity } from '@core/domain/project-apu/entity/type/DataImportEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import { DisciplineEntity } from '@core/domain/project-discipline/entity/DisciplineEntity';
import ProjectDisciplineInterface from '@core/domain/project-Discipline/interface/ProjectDisciplineInterface';

import { CreateDisciplineProjectDto } from '@core/domain/project-Discipline/dto/ProjectDiscipline.dto';

export default class CreateProjectDisciplineService {
  constructor(
    private readonly projectDisciplineInterface: ProjectDisciplineInterface,
  ) {}

  public async create(
    dto: CreateDisciplineProjectDto,
  ): Promise<CreateDisciplineProjectDto> {
    const findDiscipline = await this.projectDisciplineInterface.findByName(
      dto.name,
      dto.budget.id,
    );
    if (findDiscipline) {
      const area = dto.areas[0];
      const find = findDiscipline.areas.find((el) => el.id === area?.id);
      if (!find) {
        findDiscipline.areas.push(area);
        await this.projectDisciplineInterface.create(findDiscipline);
      }

      return findDiscipline;
    }

    const discipline = await this.projectDisciplineInterface.create(dto);

    return discipline;
  }

  async creationBatchDiscipline(
    data: DataImportEntity,
    budget: BudgetEntity,
    areas: AreaEntity[],
  ): Promise<DisciplineEntity[]> {
    const disciplines = [];
    for (const discipline of data.disciplines) {
      const { areaId, id, ...rest } = discipline;
      const area = areas[areaId];
      const discip = await this.create({
        ...rest,
        areas: [area],
        budget,
      });
      disciplines[id] = discip;
    }

    return disciplines;
  }
}
