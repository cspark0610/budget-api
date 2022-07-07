/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  CreateApuProjectDto,
  CreateBatchApuProjectDto,
} from '@core/domain/project-apu/dto';
import CreateBatchProjectApuService from '@core/service/project-apu/case-use/CreateBatchProjectApuService';
import ProjectApuService from '@core/service/project-apu/case-use/CreateProjectApuService';
import {
  BadRequestException,
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

import fastify = require('fastify');
import { kIsMultipart } from 'fastify-formidable';
import formidable = require('formidable');

@ApiTags('Project - Apu')
@Controller('budget/project/apus')
export class ProjectApuController {
  constructor(
    private readonly apuService: ProjectApuService,
    private readonly apuBatchService: CreateBatchProjectApuService,
  ) {}

  @Post()
  @ApiBody({ type: CreateApuProjectDto })
  async create(@Body() dto: CreateApuProjectDto) {
    const data = await this.apuService.create(dto);
    return {
      message: 'Apu has been successfully created',
      data,
    };
  }

  @Post('batch/:budgetId')
  @ApiBody({ type: CreateBatchApuProjectDto })
  @ApiConsumes('multipart/form-data')
  async createBatch(
    @Param('budgetId', ParseIntPipe) budgetId: number,
    @Req() req: fastify.FastifyRequest,
    @Res() res: fastify.FastifyReply,
  ) {
    if (req[kIsMultipart] === false) {
      res.send(new BadRequestException('Expected multipart/form-data'));
      return;
    }
    await req.parseMultipart();

    const { files } = req;
    const body = req.body as CreateBatchApuProjectDto;
    const file = files.file as formidable.File;
    const data = await this.apuBatchService.createBatch(body, file, budgetId);

    res.status(201).send({
      message: 'File parsed successfully',
      data,
    });
  }
}
