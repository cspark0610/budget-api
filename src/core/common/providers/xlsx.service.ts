/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-destructuring */
import type { WorkBook, WorkSheet } from 'xlsx-js-style';

import { Stream } from 'stream';
import XLSX from 'xlsx-js-style';

export class XlsxService {
  readWorkbook = (stream: Stream): Promise<WorkBook> =>
    new Promise((resolve, reject) => {
      const buffers = [];
      stream.on('data', (data: any) => buffers.push(data));
      stream.on('end', () => {
        const buffer = Buffer.concat(buffers);
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        resolve(workbook);
      });
      stream.on('error', (err: Error) => reject(err));
    });

  parseSheetToJson = <T>(workbook: WorkBook, sheetName?: string): Array<T> => {
    if (!sheetName) sheetName = workbook.SheetNames[0];

    if (!workbook.SheetNames.includes(sheetName)) {
      throw new Error(`Sheet [ ${sheetName} ] not found`);
    }

    const worksheet = workbook.Sheets[sheetName];
    const sheet = XLSX.utils.sheet_to_json(worksheet);
    return sheet as Array<T>;
  };

  writeXlsx = (
    header: Array<string>,
    body: Array<any>,
    title = 'Titulo',
    sheetName = 'Sheet1',
  ): Buffer => {
    const workbook = XLSX.utils.book_new();

    workbook.Props = {
      Title: title,
      Subject: sheetName,
      Author: 'SmartCORE v2',
      CreatedDate: new Date(),
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const sheet: WorkSheet = XLSX.utils.aoa_to_sheet([
      [title],
      header,
      ...body,
    ]);

    /* ------- TITLE -------*/
    // Merge cells title and center
    sheet['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: header.length - 1 } },
    ];

    // Set style for title
    sheet.A1.s = {
      font: { sz: 16, bold: true },
      alignment: { horizontal: 'center', vertical: 'center' },
    };

    /* ------- HEADERS -------*/
    // Size of headers
    const colWidths = header.map((col) => col.length);
    // Apply size to headers
    sheet['!cols'] = header.map((_, index) => ({ wch: colWidths[index] + 2 }));

    // Generate cells for headers
    const cells = [];
    for (let i = 0; i < header.length; i++) {
      cells.push(`${String.fromCharCode(65 + i)}2`);
    }

    // Set style for header
    cells.forEach((cell) => {
      sheet[cell].s = {
        font: { bold: true, sz: 12, color: { rgb: 'FFFFFF' } },
        fill: {
          patternType: 'solid',
          fgColor: { rgb: '00023047' },
          bgColor: { rgb: '00023047' },
        },
        alignment: { horizontal: 'center', vertical: 'center' },
      };
    });

    XLSX.utils.book_append_sheet(workbook, sheet, sheetName);

    const buffer: Buffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx',
    });

    return buffer;
  };

  getSheetHeaders = (workbook: WorkBook, sheetName?: string): Array<any> => {
    if (!sheetName) sheetName = workbook.SheetNames[0];

    if (!workbook.SheetNames.includes(sheetName)) {
      throw new Error(`Sheet [ ${sheetName} ] not found`);
    }
    const sheet = workbook.Sheets[sheetName];
    const headers = [];
    const range = XLSX.utils.decode_range(sheet['!ref']);
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cell = sheet[XLSX.utils.encode_cell({ c: C, r: 0 })];
      if (cell) {
        headers.push(cell.v);
      }
    }
    return headers;
  };
}
