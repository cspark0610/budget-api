import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuWorkforceDto,
} from '../dto/index';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IApuWorkforceRepository {
  create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuWorkforceDto[]>;
}
