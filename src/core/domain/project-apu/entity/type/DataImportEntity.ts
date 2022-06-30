import { AreaApuEntityPayload } from '@core/domain/project-area/entity/type/AreaApuEntityPayload';
import { DisciplineApuEntityPayload } from '@core/domain/project-discipline/entity/type/DisciplineApuEntityPayload';

import { ApuEntityPayload } from './ApuEntityPayload';

export class DataImportEntity {
  areas: AreaApuEntityPayload[];

  disciplines: DisciplineApuEntityPayload[];

  apus: ApuEntityPayload[];
}
