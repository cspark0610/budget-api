/* eslint-disable import/order */
import { ProjectDisciplineDITokens } from '@core/domain/project-discipline/di/ProjectDisciplineDITokens';
import CreateDisciplineService from '@core/service/project-discipline/case-use/CreateDisciplineService';
import ProjectDisciplineRepositoryAdapter from '@infrastructure/adapter/data-persistence/typeorm/repository/project-discipline/ProjectDisciplineRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectDisciplineController } from '../api/http-rest/controller/project-discipline/ProjectDisciplineController';

import { ProjectDiscipline } from '@infrastructure/adapter/data-persistence/typeorm/entity/project-discipline/ProjectDiscipline.entity';

const dataPersistenceProviders: Provider[] = [
  {
    useClass: ProjectDisciplineRepositoryAdapter,
    provide: ProjectDisciplineDITokens.CreateDisciplineRepository,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([ProjectDiscipline])],
  controllers: [ProjectDisciplineController],
  providers: [CreateDisciplineService, ...dataPersistenceProviders],
  exports: [CreateDisciplineService],
})
export class ProjectDisciplineModule {}
