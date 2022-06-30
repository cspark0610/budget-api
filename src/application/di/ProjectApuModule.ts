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
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { XlsxDepartureService } from '~m/b.project/apu/providers';
import { ProjectApuController } from '../api/http-rest/controller/project-apu/ProjectApuController';

// import { AreaModule } from '~/modules/b.project/area/area.module';
// import { DisciplineModule } from '~/modules/b.project/discipline/discipline.module';
// import { BudgetModule } from '~m/b.project/budget/budget.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectApu,
      ProjectApuEquipment,
      ProjectApuMaterial,
      ProjectApuSubcontract,
      ProjectApuWorkforce,
    ]),
    // AreaModule,
    // DisciplineModule,
    // BudgetModule,
  ],
  controllers: [ProjectApuController],
  providers: [ProjectApuService, CreateBatchProjectApuService], // XlsxDepartureService
})
export class ProjectApuModule {}
