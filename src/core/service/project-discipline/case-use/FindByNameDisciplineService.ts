import ProjectDisciplineInterface from '@core/domain/project-Discipline/interface/ProjectDisciplineInterface';

import { CreateDisciplineProjectDto } from '@core/domain/project-Discipline/dto/ProjectDiscipline.dto';

export default class FindByNameDisciplineService {
  constructor(
    private readonly projectDisciplineInterface: ProjectDisciplineInterface,
  ) {}

  public async findByName(
    name: string,
    budgetId: number,
  ): Promise<CreateDisciplineProjectDto> {
    const payload = await this.projectDisciplineInterface.findByName(
      name,
      budgetId,
    );

    return payload;
  }
}
