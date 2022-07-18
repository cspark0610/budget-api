/* eslint-disable import/order */
import IBudgetRepository from '@core/domain/budget/interface/BudgetInterface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BudgetMapper } from '../../entity/budget/mapper/BudgetMapper';

import { Budget } from '../../entity/budget/Budget.entity';

import { BudgetDto } from '@core/domain/budget/dto/Budget.dto';
import { CreateBudgetDto } from '@core/domain/budget/dto/CreateBudget.dto';

@Injectable()
export default class BudgetRepositoryAdapter implements IBudgetRepository {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

  public async findAll(): Promise<BudgetDto[]> {
    const budget = await this.budgetRepository.find();
    const budgetDto = BudgetMapper.toOrmDomainDtos(budget);

    return budgetDto;
  }

  public async findById(id: number): Promise<BudgetDto> {
    const budget = await this.budgetRepository.findOne({
      where: { id },
    });
    const budgetDto = BudgetMapper.toOrmDomainDto(budget);

    return budgetDto;
  }

  public async create(dto: CreateBudgetDto): Promise<BudgetDto> {
    const newBudget = this.budgetRepository.create(dto);
    const newData = await this.budgetRepository.save(newBudget);
    const budgetDto = BudgetMapper.toOrmDomainDto(newData);

    return budgetDto;
  }
}
