import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuEquipmentDto,
} from '../dto/index';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IApuEquipmentRepository {
  /* findUser(
    by: { id?: string; email?: string },
    options?: RepositoryFindOptions
  ): Promise<Optional<User>>;  */
  create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuEquipmentDto[]>;
}
