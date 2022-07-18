import { UpdateAreaDto } from '../dto';
import { AreaEntity } from '../entity/AreaEntity';

import { CreateAreaProjectDto } from '../dto/ProjectArea.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectAreaRepository {
  create(dto: CreateAreaProjectDto);
  findByName(name: string, budget: number): Promise<AreaEntity>;
  findByCode(code: string);
  findById(id: number): Promise<CreateAreaProjectDto>;
  update(id: number, dto: UpdateAreaDto): Promise<UpdateAreaDto>;
}
