import CreateDisciplineService from '@core/service/project-discipline/case-use/CreateDisciplineService';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { CreateDisciplineDto } from '@core/domain/project-discipline/dto/CreateDiscipline.dto';

@ApiTags('Project - Discipline')
@Controller('project/discipline')
export class ProjectDisciplineController {
  constructor(
    private readonly createDisciplineService: CreateDisciplineService,
  ) {}

  @Post()
  @ApiBody({ type: CreateDisciplineDto })
  async create(@Body() dto: CreateDisciplineDto) {
    const data = await this.createDisciplineService.create(dto);
    return {
      message: 'Discipline has been successfully created',
      data,
    };
  }
}
