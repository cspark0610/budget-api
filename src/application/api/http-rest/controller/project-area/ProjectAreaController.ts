import ProjectApuService from '@core/service/project-apu/case-use/CreateProjectApuService';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
// import fastify = require('fastify');
import { kIsMultipart } from 'fastify-formidable';

import { CreateAreaProjectDto } from '@core/domain/project-area/dto/ProjectArea.dto';
// import formidable = require('formidable');

@ApiTags('Project - Area')
@Controller('project/area')
export class ProjectAreaController {
  constructor(private readonly apuService: ProjectApuService) {}

  @Post()
  @ApiBody({ type: CreateAreaProjectDto })
  create(@Body() dto: CreateAreaProjectDto) {
    const data = 'test'; // await this.apuService.create(dto);
    return {
      message: 'Apu has been successfully created',
      data,
    };
  }
}
