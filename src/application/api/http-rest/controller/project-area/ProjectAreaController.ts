import CreateProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { CreateAreaDto } from '@core/domain/project-area/dto/CreateArea.dto';

@ApiTags('Project - Area')
@Controller('project/area')
export class ProjectAreaController {
  constructor(private readonly projectAreaService: CreateProjectAreaService) {}

  @Post()
  @ApiBody({ type: CreateAreaDto })
  async create(@Body() dto: CreateAreaDto) {
    const data = await this.projectAreaService.create(dto);
    return {
      message: 'Area has been successfully created',
      data,
    };
  }
}
