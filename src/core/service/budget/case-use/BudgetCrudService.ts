import { BudgetDITokens } from '@core/domain/budget/di/BudgetDITokens';
import { UpdateBudgetDto } from '@core/domain/budget/dto';
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

  public async update(
    id: number,
    dto: UpdateBudgetDto,
  ): Promise<UpdateBudgetDto> {
    const budget = await this.budgetInterface.update(id, dto);

    return budget;
  }

  // public async remove(id: number) {
  //   const budget = await this.budgetInterface.remove(id);
  //   if (!budget) throw new BadRequestException('Budget not found');
  //   return budget;
  // }
}
