import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';

import { ProjectArea } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-area/ProjectArea.entity';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

export class ProjectAreaMapper {
  public static toOrmDtoDomain(
    ormProjectArea: ProjectArea,
  ): CreateAreaProjectDto {
    const projectAreaDto: CreateAreaProjectDto = new CreateAreaProjectDto();
    projectAreaDto.name = ormProjectArea.name;
    projectAreaDto.description = ormProjectArea.description;
    projectAreaDto.code = ormProjectArea.code;

    return projectAreaDto;
  }

  public static toOrmDtosDomain(
    ormProjectAreas: ProjectArea[],
  ): CreateAreaProjectDto[] {
    return ormProjectAreas.map((ormProjectArea) =>
      this.toOrmDtoDomain(ormProjectArea),
    );
  }

  public static toOrmEntityDomain(ormProjectArea: ProjectArea): AreaEntity {
    const areaEntity: AreaEntity = new AreaEntity();
    areaEntity.id = ormProjectArea.id;
    areaEntity.name = ormProjectArea.name;
    areaEntity.description = ormProjectArea.description;
    areaEntity.code = ormProjectArea.code;

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
