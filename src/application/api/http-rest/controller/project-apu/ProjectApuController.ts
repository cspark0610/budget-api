import { CreateApuProjectDto } from '@core/domain/project-apu/dto';
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
// import formidable = require('formidable');

@ApiTags('Budget - Project')
@Controller('budget/project/apus')
export class ProjectApuController {
  constructor(private readonly apuService: ProjectApuService) {}

  @Post()
  @ApiBody({ type: CreateApuProjectDto })
  async create(@Body() dto: CreateApuProjectDto) {
    const data = await this.apuService.create(dto);
    return {
      message: 'Apu has been successfully created',
      data,
    };
  }
}
