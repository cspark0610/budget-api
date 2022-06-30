import { ApuProjectDto, CreateApuProjectDto } from '../dto/index';
import { ProjectApuEntity } from '../entity/ProjectApuEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProjectApuRepository {
  /* findUser(
    by: { id?: string; email?: string },
    options?: RepositoryFindOptions
  ): Promise<Optional<User>>;  */
  create(apu: CreateApuProjectDto): Promise<ApuProjectDto>;

  createBatch(apu: ProjectApuEntity[]): Promise<ApuProjectDto[]>;

  updateUser(apu: CreateApuProjectDto): Promise<CreateApuProjectDto>;
}
