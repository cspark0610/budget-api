/* eslint-disable import/order */
import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import IBudgetRepository from '@core/domain/budget/interface/BudgetInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BudgetMapper } from '../../entity/budget/mapper/BudgetMapper';

import { Budget } from '../../entity/budget/Budget.entity';

import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';

@Injectable()
export default class BudgetRepositoryAdapter implements IBudgetRepository {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

  public async findAll(): Promise<CreateBudgetDto[]> {
    const budgets = await this.budgetRepository.find();
    const budgetsDto = BudgetMapper.toEntitiesDomain(budgets);

    return budgetsDto;
  }

  public async findById(id: number): Promise<BudgetEntity> {
    const budget = await this.budgetRepository.findOne({
      where: { id },
    });
    // const budgetDto = BudgetMapper.toEntityDomain(budget);

    return budget;
  }

  public async create(dto: CreateBudgetDto): Promise<CreateBudgetDto> {
    const newBudget = this.budgetRepository.create(dto);
    const newData = await this.budgetRepository.save(newBudget);
    const budgetDto = BudgetMapper.toEntityDomain(newData);

    return budgetDto;
  }
}
