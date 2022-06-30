import { AreaEntity } from '../entity/AreaEntity';

import { CreateAreaProjectDto } from '../dto/ProjectArea.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectAreaRepository {
  create(dto: CreateAreaProjectDto): Promise<AreaEntity>;
  findByName(name: string, budget: number): Promise<AreaEntity>;
}
