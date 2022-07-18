import { ProjectAreaDITokens } from '@core/domain/project-area/di/ProjectAreaDITokens';
import ProjectAreaInterface from '@core/domain/project-area/interface/ProjectAreaInterface';
import { Inject } from '@nestjs/common';

import { CreateAreaDto } from '@core/domain/project-area/dto/CreateArea.dto';

export default class FindByNameAreaService {
  constructor(
    @Inject(ProjectAreaDITokens.CreateAreaRepository)
    private readonly projectAreaInterface: ProjectAreaInterface,
  ) {}

  public async findByName(
    name: string,
    budgetId: number,
  ): Promise<CreateAreaDto> {
    const payload = await this.projectAreaInterface.findByName(name, budgetId);

    return payload;
  }
}
