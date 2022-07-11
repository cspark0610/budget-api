/* eslint-disable import/order */
import { UpdateBudgetDto } from '@core/domain/budget/dto';
import { BudgetEntity } from '@core/domain/budget/entity/BudgetEntity';
import IBudgetRepository from '@core/domain/budget/interface/BudgetInterface';
import { BadRequestException, Injectable } from '@nestjs/common';
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

  // public async remove(id: number) {
  //   const budget = await this.findById(id);
  //   if (!budget) throw new BadRequestException('Budget not found');
  //   return this.budgetRepository.remove(budget);
  // }

  public async update(id: number, dto: UpdateBudgetDto): Promise<Budget> {
    const budget = await this.findById(id);
    if (!budget) throw new BadRequestException('Budget not found');

    const editedBudget = Object.assign(budget, dto);
    return this.budgetRepository.save(editedBudget);
  }

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
