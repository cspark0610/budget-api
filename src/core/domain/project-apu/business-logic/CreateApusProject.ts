/* eslint-disable no-restricted-syntax */
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
    private budgetId: number,
  ) {}

  public generate() {
    for (const apu of this.dataImportEntity.apus) {
      const { areaId, disciplineId, ...rest } = apu;
      const apuproject = {
        ...rest,
        budget: { id: this.budgetId },
        area: { id: this.areas[areaId].id },
        discipline: { id: this.disciplines[disciplineId].id },
      } as unknown as ProjectApuEntity;
      this.apusProject.push(apuproject);
    }
  }

  public getProjectApus(): ProjectApuEntity[] {
    return this.apusProject;
  }
}
