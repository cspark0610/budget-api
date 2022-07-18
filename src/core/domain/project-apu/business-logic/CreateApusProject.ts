/* eslint-disable no-restricted-syntax */
import { DepartureEntity } from '@core/domain/master/entity/DepartureEntity';
import { AreaEntity } from '@core/domain/project-area/entity/AreaEntity';
import { DisciplineEntity } from '@core/domain/project-discipline/entity/DisciplineEntity';

import { ProjectApuEntity } from '../entity/ProjectApuEntity';
import { DataImportEntity } from '../entity/type/DataImportEntity';

export class CreateApusProject {
  private apusProject = new Array<ProjectApuEntity>();

  constructor(
    private dataImportEntity: DataImportEntity,
    private areas: AreaEntity[],
    private disciplines: DisciplineEntity[],
    private departure: DepartureEntity[],
    private budgetId: number,
  ) {}

  public generate() {
    let depId = 0;
    for (const apu of this.dataImportEntity.apus) {
      const { areaId, disciplineId, ...rest } = apu;
      const apuproject = {
        ...rest,
        budget: { id: this.budgetId },
        area: { id: this.areas[areaId].id },
        discipline: { id: this.disciplines[disciplineId].id },
        departure: { id: this.departure[depId].id },
      } as unknown as ProjectApuEntity;
      this.apusProject.push(apuproject);
      depId++;
    }
  }

  public getProjectApus(): ProjectApuEntity[] {
    return this.apusProject;
  }
}
