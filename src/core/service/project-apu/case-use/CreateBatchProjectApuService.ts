/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import formidable = require('formidable');

import { getFileExt } from '@core/common/helpers/index';
import { CreateApusProject } from '@core/domain/project-apu/business-logic/CreateApusProject';
import { ParseXlsxDeparture } from '@core/domain/project-apu/business-logic/ParseXlsxDeparture';
import { ProjectApuDITokens } from '@core/domain/project-apu/di/ProjectApuDITokens';
import { CreateBatchApuProjectDto } from '@core/domain/project-apu/dto/index';
import ProjectApuInterface from '@core/domain/project-apu/interface/ProjectApuInterface';
import { BudgetCrudService } from '@core/service/budget/case-use/BudgetCrudService';
import DepartureCrudService from '@core/service/master/case-use/DepartureCrudService';
import CreateProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
import CreateDisciplineService from '@core/service/project-discipline/case-use/CreateDisciplineService';

import { CreateDepartureDto } from '@core/domain/master/dto/CreateDeparture.dto';

@Injectable()
export default class CreateBatchProjectApuService {
  constructor(
    @Inject(ProjectApuDITokens.CreateBatchProjectApuRepository)
    private readonly projectApuInterface: ProjectApuInterface,
    private readonly budgetCrudService: BudgetCrudService,
    private readonly areaService: CreateProjectAreaService,
    private readonly createDisciplineService: CreateDisciplineService,
    private readonly departureService: DepartureCrudService,
  ) {}

  async createBatch(
    body: CreateBatchApuProjectDto,
    file: formidable.File,
    budgetId: number,
  ): Promise<any> {
    // Files accepted
    const acceptedFiles = ['xlsx', 'xls'];
    if (!acceptedFiles.includes(getFileExt(file.name)))
      throw new BadRequestException('File extension not accepted');

    const fileStream = createReadStream(file.path);
    const parseXlsxDeparture: ParseXlsxDeparture = new ParseXlsxDeparture();
    const data = await parseXlsxDeparture.parseData(fileStream, body);

    const budget = await this.budgetCrudService.findById(budgetId);
    if (!budget) throw new BadRequestException('Budget not found');

    const areas = await this.areaService.creationBatchArea(data, budget);
    const disciplines =
      await this.createDisciplineService.creationBatchDiscipline(
        data,
        budget,
        areas,
      );
    const departures = [];
    for (const item of data.apus) {
      let departure = await this.departureService.findByName(item.name);
      if (Object.keys(departure).length === 0) {
        const newDeparture = Object.assign(new CreateDepartureDto(), item);
        departure = await this.departureService.create(newDeparture);
      }
      departures.push(departure);
    }
    const generatorApusProject = new CreateApusProject(
      data,
      areas,
      disciplines,
      departures,
      budgetId,
    );
    generatorApusProject.generate();
    const apusProject = generatorApusProject.getProjectApus();

    /* ======= SAVE APU ======= */
    const newApus = await this.projectApuInterface.createBatch(apusProject);
    if (newApus.length === 0) throw new BadRequestException('No data to save');

    const items: number = apusProject.length;
    const hits: number = newApus.length;
    return {
      items,
      hits,
      failures: items - hits,
    };
  }
}
