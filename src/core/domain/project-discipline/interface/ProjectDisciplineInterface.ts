import { CreateDisciplineProjectDto } from '../dto/ProjectDiscipline.dto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectDisciplineRepository {
  create(dto: CreateDisciplineProjectDto): Promise<CreateDisciplineProjectDto>;
  findByName(
    name: string,
    budgetId: number,
  ): Promise<CreateDisciplineProjectDto>;
}
