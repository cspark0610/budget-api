import {
  CreateApuProjectDto,
  ProjectApuEquipmentDto,
} from '@core/domain/project-apu/dto/index';

import { Equipment } from '@infrastructure/adapter/data-persistence/typeorm/entity/master/EquipmentMaster.entity';
import { ProjectApuEquipment } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/ProjectApuEquipment.entity';

export class ApuEquipmentMapper {
  public static toDomainEntity(
    dto: CreateApuProjectDto,
    apu: any,
  ): ProjectApuEquipment[] {
    const arrEquipment = dto.apuProjectEquipment.map((item) => {
      const apuEquipment = new ProjectApuEquipment();
      apuEquipment.projectApu = apu;
      const equipment = new Equipment();
      equipment.id = item.equipmentId;
      apuEquipment.equipment = equipment;
      apuEquipment.quadrille = item.quadrille;
      apuEquipment.unitPrice = item.unitPrice;
      apuEquipment.factor = item.factor;
      apuEquipment.unitPriceFactored = item.unitPrice * item.factor;
      apuEquipment.quantitymt =
        ((item.quadrille * apu.partialHH) / apu.efficiency_EQ) * apu.measured;

      return apuEquipment;
    });

    return arrEquipment;
  }

  public static toEntityDomain(
    apuEquipment: ProjectApuEquipment[],
  ): ProjectApuEquipmentDto[] {
    const arrEquipmentDto = apuEquipment.map((item) => {
      const apuEquipmentDto = new ProjectApuEquipmentDto();
      apuEquipmentDto.quadrille = item.quadrille;
      apuEquipmentDto.unitPrice = item.unitPrice;
      apuEquipmentDto.factor = item.factor;
      apuEquipmentDto.unitPriceFactored = item.unitPrice * item.factor;
      apuEquipmentDto.quantitymt = item.quantitymt;

      return apuEquipmentDto;
    });

    return arrEquipmentDto;
  }
}
