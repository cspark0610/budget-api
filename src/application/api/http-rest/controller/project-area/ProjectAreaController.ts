import { UpdateAreaDto } from '@core/domain/project-area/dto';
import CreateProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.projectAreaService.findById(id);
    return {
      message: data ? 'Budget found' : 'Budget not found',
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAreaDto,
  ) {
    const data = await this.projectAreaService.update(id, dto);
    return {
      message: 'Budget Area updated',
      data,
    };
  }
}
