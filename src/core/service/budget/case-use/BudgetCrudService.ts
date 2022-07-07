import { BudgetDITokens } from '@core/domain/budget/di/BudgetDITokens';
import BudgetInterface from '@core/domain/budget/interface/BudgetInterface';
import { Inject } from '@nestjs/common';

import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';

export default class BudgetCrudService {
  constructor(
    @Inject(BudgetDITokens.BudgetRepository)
    private readonly budgetInterface: BudgetInterface,
  ) {}

  public async create(dto: CreateBudgetDto): Promise<CreateBudgetDto> {
    const budget = await this.budgetInterface.create(dto);

    return budget;
  }

  public async findAll(): Promise<CreateBudgetDto[]> {
    const budgets = await this.budgetInterface.findAll();

    return budgets;
  }

  public async findById(id: number): Promise<CreateBudgetDto> {
    const budget = await this.budgetInterface.findById(id);

    return budget;
  }
}
