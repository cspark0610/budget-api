import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';

import { ProjectArea } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-area/ProjectArea.entity';

import { ProjectAreaDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export class ProjectAreaMapper {
  public static toOrmDtoDomain(ormProjectArea: ProjectArea): ProjectAreaDto {
    const projectAreaDto: ProjectAreaDto = new ProjectAreaDto();
    projectAreaDto.id = ormProjectArea.id;
    projectAreaDto.name = ormProjectArea.name;
    projectAreaDto.description = ormProjectArea.description;
    projectAreaDto.code = ormProjectArea.code;

    return projectAreaDto;
  }

  public static toOrmDtosDomain(
    ormProjectAreas: ProjectArea[],
  ): ProjectAreaDto[] {
    return ormProjectAreas.map((ormProjectArea) =>
      this.toOrmDtoDomain(ormProjectArea),
    );
  }

  public static toOrmEntityDomain(ormProjectArea: ProjectArea): AreaEntity {
    const areaEntity: AreaEntity = new AreaEntity();
    if (ormProjectArea) {
      const budget: BudgetEntity = new BudgetEntity();
      budget.id = ormProjectArea.budget.id;
      areaEntity.id = ormProjectArea.id;
      areaEntity.name = ormProjectArea.name;
      areaEntity.description = ormProjectArea.description;
      areaEntity.code = ormProjectArea.code;
      areaEntity.budget = budget;
    }

    return areaEntity;
  }

  public static toOrmEntitiesDomain(
    ormProjectAreas: ProjectArea[],
  ): AreaEntity[] {
    return ormProjectAreas.map((ormProjectArea) =>
      this.toOrmEntityDomain(ormProjectArea),
    );
  }
}
