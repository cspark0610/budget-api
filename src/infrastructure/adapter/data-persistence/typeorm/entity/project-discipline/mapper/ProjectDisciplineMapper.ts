import { ProjectDiscipline } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-Discipline/ProjectDiscipline.entity';

import { CreateDisciplineProjectDto } from '@core/domain/project-Discipline/dto/ProjectDiscipline.dto';

export class ProjectDisciplineMapper {
  public static toOrmDomainDto(
    ormProjectDiscipline: ProjectDiscipline,
  ): CreateDisciplineProjectDto {
    const projectDisciplineDto: CreateDisciplineProjectDto =
      new CreateDisciplineProjectDto();
    projectDisciplineDto.name = ormProjectDiscipline.name;
    projectDisciplineDto.description = ormProjectDiscipline.description;
    projectDisciplineDto.code = ormProjectDiscipline.code;

    return projectDisciplineDto;
  }

  public static toOrmDomainDtos(
    ormProjectDisciplines: ProjectDiscipline[],
  ): CreateDisciplineProjectDto[] {
    return ormProjectDisciplines.map((ormProjectDiscipline) =>
      this.toOrmDomainDto(ormProjectDiscipline),
    );
  }
}
