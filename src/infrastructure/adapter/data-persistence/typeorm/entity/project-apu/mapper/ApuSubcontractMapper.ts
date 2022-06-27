import {
  CreateApuProjectDto,
  ProjectApuSubcontractDto,
} from '@core/domain/project-apu/dto/index';

import { Subcontract } from '@infrastructure/adapter/data-persistence/typeorm/entity/master/SubcontractMaster.entity';
import { ProjectApuSubcontract } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/ProjectApuSubcontract.entity';

export class ApuSubcontractMapper {
  public static toDomainEntity(
    dto: CreateApuProjectDto,
    apu: any,
  ): ProjectApuSubcontract[] {
    const arrSubcontract = dto.apuProjectSubcontract.map((item) => {
      const apuSubcontract = new ProjectApuSubcontract();
      apuSubcontract.projectApu = apu;
      const subcontract = new Subcontract();
      subcontract.id = item.subcontractId;
      apuSubcontract.subcontract = subcontract;
      apuSubcontract.quantity = item.quantity;
      apuSubcontract.unitPrice = item.unitPrice;
      apuSubcontract.factor = item.factor;
      apuSubcontract.unitPriceFactored = item.unitPrice * item.factor;
      apuSubcontract.quantitymt = item.quantity * apu.measured;

      return apuSubcontract;
    });

    return arrSubcontract;
  }

  public static toEntityDomain(
    apuSubcontract: ProjectApuSubcontract[],
  ): ProjectApuSubcontractDto[] {
    const arrSubcontractDto = apuSubcontract.map((item) => {
      const apuSubcontractDto = new ProjectApuSubcontractDto();
      apuSubcontractDto.quantity = item.quantity;
      apuSubcontractDto.unitPrice = item.unitPrice;
      apuSubcontractDto.factor = item.factor;
      apuSubcontractDto.unitPriceFactored = item.unitPrice * item.factor;
      apuSubcontractDto.quantitymt = item.quantitymt;

      return apuSubcontractDto;
    });

    return arrSubcontractDto;
  }
}
