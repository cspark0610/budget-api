import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuSubcontractDto,
} from '../dto/index';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IApuSubcontractRepository {
  create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuSubcontractDto[]>;
}
