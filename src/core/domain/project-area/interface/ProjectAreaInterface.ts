import { AreaEntity } from '../entity/AreaEntity';

import { CreateAreaDto } from '../dto/CreateArea.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectAreaRepository {
  create(dto: CreateAreaDto): Promise<AreaEntity>;
  findByName(name: string, budget: number): Promise<AreaEntity>;
}
