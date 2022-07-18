import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import { DisciplineEntity } from '@core/domain/project-discipline/entity/DisciplineEntity';

import { ProjectDiscipline } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-Discipline/ProjectDiscipline.entity';

import { DisciplineDto } from '@core/domain/project-discipline/dto/Discipline.dto';

export class ProjectDisciplineMapper {
  public static toOrmDomainDto(
    ormProjectDiscipline: ProjectDiscipline,
  ): DisciplineDto {
    const projectDisciplineDto: DisciplineDto = new DisciplineDto();
    if (ormProjectDiscipline) {
      projectDisciplineDto.id = ormProjectDiscipline.id;
      projectDisciplineDto.name = ormProjectDiscipline.name;
      projectDisciplineDto.description = ormProjectDiscipline.description;
      projectDisciplineDto.code = ormProjectDiscipline.code;
    }

    return projectDisciplineDto;
  }

  public static toOrmDomainDtos(
    ormProjectDisciplines: ProjectDiscipline[],
  ): DisciplineDto[] {
    return ormProjectDisciplines.map((ormProjectDiscipline) =>
      this.toOrmDomainDto(ormProjectDiscipline),
    );
  }

  public static toOrmDomainEntity(
    ormProjectDiscipline: ProjectDiscipline,
  ): DisciplineEntity {
    const disciplineEntity: DisciplineEntity = new DisciplineEntity();
    if (ormProjectDiscipline) {
      const areaEntity: AreaEntity[] = [];
      ormProjectDiscipline.areas.map((area) => areaEntity.push(area));
      disciplineEntity.id = ormProjectDiscipline.id;
      disciplineEntity.name = ormProjectDiscipline.name;
      disciplineEntity.description = ormProjectDiscipline.description;
      disciplineEntity.code = ormProjectDiscipline.code;
      disciplineEntity.areas = areaEntity;
    }

    return disciplineEntity;
  }

  public static toOrmDomainEntities(
    ormProjectDisciplines: ProjectDiscipline[],
  ): DisciplineEntity[] {
    return ormProjectDisciplines.map((ormProjectDiscipline) =>
      this.toOrmDomainEntity(ormProjectDiscipline),
    );
  }
}
