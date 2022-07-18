import { ProjectDisciplineDITokens } from '@core/domain/project-discipline/di/ProjectDisciplineDITokens';
import ProjectDisciplineInterface from '@core/domain/project-Discipline/interface/ProjectDisciplineInterface';
import { Inject } from '@nestjs/common';

import { CreateDisciplineDto } from '@core/domain/project-discipline/dto/CreateDiscipline.dto';

export default class FindByNameDisciplineService {
  constructor(
    @Inject(ProjectDisciplineDITokens.CreateDisciplineRepository)
    private readonly projectDisciplineInterface: ProjectDisciplineInterface,
  ) {}

  public async findByName(
    name: string,
    budgetId: number,
  ): Promise<CreateDisciplineDto> {
    const payload = await this.projectDisciplineInterface.findByName(
      name,
      budgetId,
    );

    return payload;
  }
}
