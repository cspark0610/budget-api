import CreateProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';

@ApiTags('Project - Area')
@Controller('project/area')
export class ProjectAreaController {
  constructor(private readonly projectAreaService: CreateProjectAreaService) {}

  @Post()
  @ApiBody({ type: CreateAreaProjectDto })
  async create(@Body() dto: CreateAreaProjectDto) {
    const data = await this.projectAreaService.create(dto);
    return {
      message: 'Area has been successfully created',
      data,
    };
  }
}
