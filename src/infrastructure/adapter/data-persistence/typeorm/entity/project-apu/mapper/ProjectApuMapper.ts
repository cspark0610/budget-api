import { ProjectApu } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/ProjectApu.entity';

import { ApuProjectDto } from '@core/domain/project-apu/dto/ApuProject.dto';

export class ProjectApuMapper {
  public static toDomainEntity(ormProjectApu: ProjectApu): ApuProjectDto {
    const apuProjectDto: ApuProjectDto = new ApuProjectDto();
    apuProjectDto.id = ormProjectApu.id;
    apuProjectDto.unitPrice = ormProjectApu.unitPrice;
    apuProjectDto.partialHH = ormProjectApu.partialHH;
    apuProjectDto.efficiency_EQ = ormProjectApu.efficiency_EQ;
    apuProjectDto.efficiency_MO = ormProjectApu.efficiency_MO;
    apuProjectDto.status = ormProjectApu.status;
    apuProjectDto.measured = ormProjectApu.measured;
    apuProjectDto.idApuProfile = ormProjectApu.idApuProfile;

    return apuProjectDto;
  }

  public static toDomainEntities(
    ormProjectApus: ProjectApu[],
  ): ApuProjectDto[] {
    return ormProjectApus.map((ormProjectApu) =>
      this.toDomainEntity(ormProjectApu),
    );
  }
}
