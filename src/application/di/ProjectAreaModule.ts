/* eslint-disable import/order */
import { ProjecAreaDITokens } from '@core/domain/project-area/di/ProjectAreaDITokens';
import ProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
/* ======= ENTITIES ======= */
import {
  ProjectApu,
  ProjectApuEquipment,
  ProjectApuMaterial,
  ProjectApuSubcontract,
  ProjectApuWorkforce,
} from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/index';
import ProjectAreaRepositoryAdapter from '@infrastructure/adapter/data-persistence/typeorm/repository/project-area/ProjectAreaRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectAreaController } from '../api/http-rest/controller/project-area/ProjectAreaController';

import { ProjectArea } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-area/ProjectArea.entity';

const dataPersistenceProviders: Provider[] = [
  {
    useClass: ProjectAreaRepositoryAdapter,
    provide: ProjecAreaDITokens.ProjectAreaRepository,
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
      ProjectArea,
    ]),
  ],
  controllers: [ProjectAreaController],
  providers: [ProjectAreaService, ...dataPersistenceProviders],
})
export class ProjectAreaModule {}
