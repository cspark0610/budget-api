import {
  CreateApuProjectDto,
  ProjectApuMaterialDto,
} from '@core/domain/project-apu/dto/index';

import { Material } from '@infrastructure/adapter/data-persistence/typeorm/entity/master/MaterialMaster.entity';
import { ProjectApuMaterial } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/ProjectApuMaterial.entity';

export class ApuMaterialMapper {
  public static toDomainEntity(
    dto: CreateApuProjectDto,
    apu: any,
  ): ProjectApuMaterial[] {
    const arrMaterial = dto.apuProjectMaterial.map((item) => {
      const apuMaterial = new ProjectApuMaterial();
      apuMaterial.projectApu = apu;
      const material = new Material();
      material.id = item.materialId;
      apuMaterial.material = material;
      apuMaterial.quantity = item.quantity;
      apuMaterial.unitPrice = item.unitPrice;
      apuMaterial.factor = item.factor;
      apuMaterial.unitPriceFactored = item.unitPrice * item.factor;
      apuMaterial.quantitymt = item.quantity * apu.measured;

      return apuMaterial;
    });

    return arrMaterial;
  }

  public static toEntityDomain(
    apuMaterial: ProjectApuMaterial[],
  ): ProjectApuMaterialDto[] {
    const arrMaterialDto = apuMaterial.map((item) => {
      const apuMaterialDto = new ProjectApuMaterialDto();
      apuMaterialDto.quantity = item.quantity;
      apuMaterialDto.unitPrice = item.unitPrice;
      apuMaterialDto.factor = item.factor;
      apuMaterialDto.unitPriceFactored = item.unitPrice * item.factor;
      apuMaterialDto.quantitymt = item.quantitymt;

      return apuMaterialDto;
    });

    return arrMaterialDto;
  }
}
