/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { formatCode, roundTo } from '@core/common/helpers';
import { ProjectApuEntity } from '@core/domain/project-apu/entity/ProjectApuEntity';
import { DataImportEntity } from '@core/domain/project-apu/entity/type/DataImportEntity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Stream } from 'stream';

import { XlsxService } from '@core/common/providers/xlsx.service';

import { CreateBatchApuProjectDto } from '@core/domain/project-apu/dto/ApuCreateBatch.dto';

@Injectable()
export class ParseXlsxDeparture extends XlsxService {
  async parseData(
    stream: Stream,
    body: CreateBatchApuProjectDto,
  ): Promise<DataImportEntity> {
    const workbook = await this.readWorkbook(stream);

    const { sheetName, headers } = body;

    const jHeaders = JSON.parse(headers);
    const parseData = this.parseSheetToJson<ProjectApuEntity>(
      workbook,
      sheetName,
    );
    const result: DataImportEntity = {
      areas: [],
      disciplines: [],
      apus: [],
    };

    let ida = 0;
    let idd = 0;

    parseData.forEach((item) => {
      const code = formatCode(String(item[jHeaders.code]));
      const point = (code.match(/\./g) || []).length;
      switch (point) {
        case 1:
          ida = result.areas.length;
          result.areas.push({
            id: ida,
            code,
            name: this.clear(item[jHeaders.name] ?? ''),
          });
          break;
        case 2:
          if (!result.areas[ida]) {
            throw new BadRequestException('The file format is wrong');
          }
          idd = result.disciplines.length;
          result.disciplines.push({
            id: idd,
            code,
            name: this.clear(item[jHeaders.name] ?? ''),
            areaId: ida,
          });
          break;
        default:
          if (!result.areas[ida] || !result.disciplines[idd]) {
            throw new BadRequestException('The file format is wrong');
          }
          if (item[jHeaders.unit] && item[jHeaders.measured] >= 0) {
            result.apus.push({
              name: this.clear(item[jHeaders.name] ?? ''),
              unit: item[jHeaders.unit],
              code,
              description: item[jHeaders.description] ?? '',
              measured: roundTo(Number(item[jHeaders.measured]), 3),
              partialHH: 0.0,
              unitPrice: 0.0,
              areaId: ida,
              disciplineId: idd,
              departureId: 0,
            });
          }
          break;
      }
    });

    return result;
  }

  private clear(name: string | unknown) {
    return String(name).trim();
  }
}
