import {
  CreateBudgetDto,
  UpdateBudgetDto,
} from '@core/domain/budget/dto/index';
import { BudgetCrudService } from '@core/service/budget/case-use/BudgetCrudService';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Project - Budget')
@Controller('budget/project')
export class ProjectBudgetController {
  constructor(private readonly budgetService: BudgetCrudService) {}

  @Post()
  async create(@Body() dto: CreateBudgetDto) {
    const data = await this.budgetService.create(dto);

    return {
      message: data ? 'Budget created successfully' : 'Budget not found',
      data,
    };
  }

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.budgetService.findById(id);
    return {
      message: data ? 'Budget found' : 'Budget not found',
      data,
    };
  }

  @Get()
  @ApiOkResponse({ type: CreateBudgetDto })
  async findAll() {
    const data = await this.budgetService.findAll();

    return {
      message: 'Budget find successfully',
      data,
    };
  }

  /*  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBudgetDto,
  ) {
    const data = await this.budgetService.update(id, dto);

    return {
      message: 'Budget updated',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const data = await this.budgetService.remove(id);

    return {
      message: 'Budget removed',
      data,
    };
  } */
}
