import { BudgetDITokens } from '@core/domain/budget/di/BudgetDITokens';
import BudgetInterface from '@core/domain/budget/interface/BudgetInterface';
import { Inject, Injectable } from '@nestjs/common';

import { BudgetDto } from '@core/domain/budget/dto/Budget.dto';
import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';

@Injectable()
export class BudgetCrudService {
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

  public async findById(id: number): Promise<BudgetDto> {
    const budget = await this.budgetInterface.findById(id);

    return budget;
  }
}
