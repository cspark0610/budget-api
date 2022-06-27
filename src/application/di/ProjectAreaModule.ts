import ProjectApuService from '@core/service/project-apu/case-use/CreateProjectApuService';
/* ======= ENTITIES ======= */
import {
  ProjectApu,
  ProjectApuEquipment,
  ProjectApuMaterial,
  ProjectApuSubcontract,
  ProjectApuWorkforce,
} from '@infrastructure/adapter/data-persistence/typeorm/entity/project-apu/index';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectAreaController } from '../api/http-rest/controller/project-area/ProjectAreaController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectApu,
      ProjectApuEquipment,
      ProjectApuMaterial,
      ProjectApuSubcontract,
      ProjectApuWorkforce,
    ]),
  ],
  controllers: [ProjectAreaController],
  providers: [ProjectApuService],
})
export class ProjectAreaModule {}
