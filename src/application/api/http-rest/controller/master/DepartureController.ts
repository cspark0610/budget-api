import CreateDepartureService from '@core/service/master/case-use/DepartureCrudService';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { CreateDepartureDto } from '@core/domain/master/dto/CreateDeparture.dto';

@ApiTags('Master - Departure')
@Controller('master/departure')
export class DepartureController {
  constructor(
    private readonly createDepartureService: CreateDepartureService,
  ) {}

  @Post()
  @ApiBody({ type: CreateDepartureDto })
  async create(@Body() dto: CreateDepartureDto) {
    const data = await this.createDepartureService.create(dto);
    return {
      message: 'Departure has been successfully created',
      data,
    };
  }
}
