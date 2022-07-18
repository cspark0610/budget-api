/* eslint-disable import/order */

import { ProjectAreaDITokens } from '@core/domain/project-area/di/ProjectAreaDITokens';
import CreateProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';

import ProjectAreaRepositoryAdapter from '@infrastructure/adapter/data-persistence/typeorm/repository/project-area/ProjectAreaRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectAreaController } from '../api/http-rest/controller/project-area/ProjectAreaController';

import { ProjectArea } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-area/ProjectArea.entity';

const dataPersistenceProviders: Provider[] = [
  {
    useClass: ProjectAreaRepositoryAdapter,

    provide: ProjectAreaDITokens.CreateAreaRepository,

  },
];

@Module({

  imports: [TypeOrmModule.forFeature([ProjectArea])],
  controllers: [ProjectAreaController],
  providers: [CreateProjectAreaService, ...dataPersistenceProviders],
  exports: [CreateProjectAreaService],

})
export class ProjectAreaModule {}
