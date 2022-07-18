import ProjectAreaInterface from '@core/domain/project-area/interface/ProjectAreaInterface';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export default class FindByNameAreaService {
  constructor(private readonly projectAreaInterface: ProjectAreaInterface) {}

  public async findByCode(code: string): Promise<CreateAreaProjectDto> {
    const payload = await this.projectAreaInterface.findByCode(code);

    return payload;
  }
}
