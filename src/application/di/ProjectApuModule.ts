/* eslint-disable import/order */
import { ParseXlsxDeparture } from '@core/domain/project-apu/business-logic/ParseXlsxDeparture';
import { ProjectApuDITokens } from '@core/domain/project-apu/di/ProjectApuDITokens';
import CreateBatchProjectApuService from '@core/service/project-apu/case-use/CreateBatchProjectApuService';
import ProjectApuService from '@core/service/project-apu/case-use/CreateProjectApuService';
/* ======= ENTITIES ======= */
import {
  ProjectApu,
  ProjectApuEquipment,
  ProjectApuMaterial,
  ProjectApuSubcontract,
  ProjectApuWorkforce,
} from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/index';
import ProjectApuRepositoryAdapter from '@infrastructure/adapter/data-persistence/typeorm/repository/project-apu/ProjectApuRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectApuController } from '../api/http-rest/controller/project-apu/ProjectApuController';
import { BudgetModule } from './BudgetModule';
import { DepartureMasterModule } from './DepartureMasterModule';
import { ProjectAreaModule } from './ProjectAreaModule';
import { ProjectDisciplineModule } from './ProjectDisciplineModule';

import { XlsxService } from '@core/common/providers/xlsx.service';

const dataPersistenceProviders: Provider[] = [
  {
    useClass: ProjectApuRepositoryAdapter,
    provide: ProjectApuDITokens.CreateBatchProjectApuRepository,
  },
];

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectApu,
      ProjectApuEquipment,
      ProjectApuMaterial,
      ProjectApuSubcontract,
      ProjectApuWorkforce,
    ]),
    DepartureMasterModule,
    ProjectAreaModule,
    ProjectDisciplineModule,
    BudgetModule,
  ],
  controllers: [ProjectApuController],
  providers: [
    ProjectApuService,
    CreateBatchProjectApuService,
    ParseXlsxDeparture,
    XlsxService,
    ...dataPersistenceProviders,
  ],
})
export class ProjectApuModule {}
