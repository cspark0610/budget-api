import ProjectAreaInterface from '@core/domain/project-area/interface/ProjectAreaInterface';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export default class FindByNameAreaService {
  constructor(private readonly projectAreaInterface: ProjectAreaInterface) {}

  public async findByName(
    name: string,
    budgetId: number,
  ): Promise<CreateAreaProjectDto> {
    const payload = await this.projectAreaInterface.findByName(name, budgetId);

    return payload;
  }
}
