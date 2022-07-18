import { DisciplineEntity } from '../entity/DisciplineEntity';

import { CreateDisciplineDto } from '../dto/CreateDiscipline.dto';
import { DisciplineDto } from '../dto/Discipline.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectDisciplineRepository {
  create(dto: CreateDisciplineDto): Promise<DisciplineEntity>;
  findByName(name: string, budgetId: number): Promise<DisciplineEntity>;
}
