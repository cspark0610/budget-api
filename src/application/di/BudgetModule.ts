/* eslint-disable import/order */
import { BudgetDITokens } from '@core/domain/budget/di/BudgetDITokens';
import { BudgetCrudService } from '@core/service/budget/case-use/BudgetCrudService';
import BudgetRepositoryAdapter from '@infrastructure/adapter/data-persistence/typeorm/repository/budget/BudgetRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectBudgetController } from '../api/http-rest/controller/budget/BudgetController';

import { Budget } from '@infrastructure/adapter/data-persistence/typeorm/entity/budget/Budget.entity';

const dataPersistenceProviders: Provider[] = [
  {
    useClass: BudgetRepositoryAdapter,
    provide: BudgetDITokens.BudgetRepository,
  },
];
const useCaseProviders: Provider[] = [
  {
    useClass: BudgetCrudService,
    provide: BudgetDITokens.BudgetService,
    // useFactory: (userService) => new BudgetCrudService(userService),
    // inject: [BudgetDITokens.BudgetService],
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  controllers: [ProjectBudgetController],
  providers: [
    BudgetCrudService,
    ...dataPersistenceProviders,
    ...useCaseProviders,
  ],
  exports: [BudgetCrudService, BudgetDITokens.BudgetService],
})
export class BudgetModule {}
