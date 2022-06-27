import { readFileSync } from 'fs';
import XLSX from 'xlsx-js-style';

const csvToObj = <T>(path: string): Array<T> => {
  const file = readFileSync(path, 'utf8');
  const workbook = XLSX.read(file, { type: 'string' });
  const sheet_name_list = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheet_name_list[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data as Array<T>;
};

export { csvToObj };
