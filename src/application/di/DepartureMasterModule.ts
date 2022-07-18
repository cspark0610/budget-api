/* eslint-disable import/order */
import { DepartureDITokens } from '@core/domain/master/di/DepartureDITokens';
import DepartureCrudService from '@core/service/master/case-use/DepartureCrudService';
import DepartureCrudRepositoryAdapter from '@infrastructure/adapter/data-persistence/typeorm/repository/master/DepartureCrudRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartureController } from '../api/http-rest/controller/master/DepartureController';

import { Departure } from '@infrastructure/adapter/data-persistence/typeorm/entity/master/DepartureMaster.entity';

const dataPersistenceProviders: Provider[] = [
  {
    useClass: DepartureCrudRepositoryAdapter,
    provide: DepartureDITokens.DepartureCrudRepository,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([Departure])],
  controllers: [DepartureController],
  providers: [DepartureCrudService, ...dataPersistenceProviders],
  exports: [DepartureCrudService],
})
export class DepartureMasterModule {}
