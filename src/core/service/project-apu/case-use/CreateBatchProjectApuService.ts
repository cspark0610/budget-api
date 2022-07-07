/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { BadRequestException } from '@nestjs/common';
import { createReadStream } from 'fs';
import formidable = require('formidable');

import { getFileExt } from '@core/common/helpers/index';
import BudgetInterface from '@core/domain/budget/interface/BudgetInterface';
import { CreateApusProject } from '@core/domain/project-apu/business-logic/CreateApusProject';
import { ParseXlsxDeparture } from '@core/domain/project-apu/business-logic/ParseXlsxDeparture';
import { CreateBatchApuProjectDto } from '@core/domain/project-apu/dto/index';
import ProjectApuInterface from '@core/domain/project-apu/interface/ProjectApuInterface';
import CreateProjectAreaService from '@core/service/project-area/case-use/CreateProjectAreaService';
import CreateProjectDisciplineService from '@core/service/project-discipline/case-use/CreateProjectDisciplineService';

export default class CreateBatchProjectApuService {
  constructor(
    private readonly projectApuInterface: ProjectApuInterface,
    private readonly budgetInterface: BudgetInterface,
    private readonly parseXlsxDeparture: ParseXlsxDeparture,
    private readonly areaService: CreateProjectAreaService,
    private readonly disciplineService: CreateProjectDisciplineService,
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
    const data = await this.parseXlsxDeparture.parseData(fileStream, body);
    const budget = await this.budgetInterface.findById(budgetId);
    if (!budget) throw new BadRequestException('Budget not found');

    const areas = await this.areaService.creationBatchArea(data, budget.id);

    const disciplines = await this.disciplineService.creationBatchDiscipline(
      data,
      budget,
      areas,
    );

    const generatorApusProject = new CreateApusProject(
      data,
      areas,
      disciplines,
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
