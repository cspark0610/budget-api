import {
  ApuProjectDto,
  CreateApuProjectDto,
  ProjectApuMaterialDto,
} from '../dto/index';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IApuMaterialRepository {
  create(
    dto: CreateApuProjectDto,
    apu: ApuProjectDto,
  ): Promise<ProjectApuMaterialDto[]>;
}
