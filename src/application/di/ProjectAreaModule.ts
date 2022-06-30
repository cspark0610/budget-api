import ProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
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
  providers: [ProjectAreaService],
})
export class ProjectAreaModule {}
