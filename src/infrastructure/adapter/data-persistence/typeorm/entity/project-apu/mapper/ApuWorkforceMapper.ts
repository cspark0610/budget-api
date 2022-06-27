import {
  CreateApuProjectDto,
  ProjectApuWorkforceDto,
} from '@core/domain/project-apu/dto/index';

import { WorkForce } from '@infrastructure/adapter/data-persistence/typeorm/entity/master/WorkforceMaster.entity';
import { ProjectApuWorkforce } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/ProjectApuWorkforce.entity';

export class ApuWorkforceMapper {
  public static toDomainEntity(
    dto: CreateApuProjectDto,
    apu: any,
  ): ProjectApuWorkforce[] {
    const arrWorkforce = dto.apuProjectWorkforce.map((item) => {
      const apuWorkforce = new ProjectApuWorkforce();
      apuWorkforce.projectApu = apu;
      const workforce = new WorkForce();
      workforce.id = item.workforceId;
      apuWorkforce.workforce = workforce;
      apuWorkforce.quadrille = item.quadrille;
      apuWorkforce.unitPrice = item.unitPrice;
      apuWorkforce.factor = item.factor;
      apuWorkforce.unitPriceFactored = item.unitPrice * item.factor;
      apuWorkforce.quantitymt =
        ((item.quadrille * apu.partialHH) / apu.efficiency_EQ) * apu.measured;

      return apuWorkforce;
    });

    return arrWorkforce;
  }

  public static toEntityDomain(
    apuWorkforce: ProjectApuWorkforce[],
  ): ProjectApuWorkforceDto[] {
    const arrWorkforceDto = apuWorkforce.map((item) => {
      const apuWorkforceDto = new ProjectApuWorkforceDto();
      apuWorkforceDto.quadrille = item.quadrille;
      apuWorkforceDto.unitPrice = item.unitPrice;
      apuWorkforceDto.factor = item.factor;
      apuWorkforceDto.unitPriceFactored = item.unitPrice * item.factor;
      apuWorkforceDto.quantitymt = item.quantitymt;

      return apuWorkforceDto;
    });

    return arrWorkforceDto;
  }
}
