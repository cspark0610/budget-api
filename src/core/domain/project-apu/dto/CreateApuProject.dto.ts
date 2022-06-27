import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

import { Status } from '../../../common/helpers/enumStatus';
import { enumToString } from '../../../common/helpers/enumToString';
import {
  ProjectApuEquipmentDto,
  ProjectApuMaterialDto,
  ProjectApuSubcontractDto,
  ProjectApuWorkforceDto,
} from './index';

export class CreateApuProjectDto {
  @IsNotEmpty({ message: 'The code field is required' })
  readonly code: string;

  @IsNotEmpty({ message: 'The name field is required' })
  readonly name: string;

  @IsNotEmpty({ message: 'The description field is required' })
  readonly description: string;

  @IsNotEmpty({ message: 'The unit field is required' })
  readonly unit: string;

  @IsNotEmpty({ message: 'Price unit field is required' })
  @IsNumber({}, { message: 'The measured field must be numeric' })
  readonly unitPrice: number;

  @IsNotEmpty({ message: 'Partial HH field is required' })
  @IsNumber({}, { message: 'Partial HH field must be numeric' })
  readonly partialHH: number;

  @IsOptional()
  @IsNumber({}, { message: 'The efficiency_MO field must be numeric' })
  readonly efficiency_MO: number;

  @IsOptional()
  @IsNumber({}, { message: 'The efficiency_EQ field must be numeric' })
  readonly efficiency_EQ: number;

  @IsNotEmpty({ message: 'Status field is required' })
  @IsEnum(Status, {
    each: true,
    message: `Must be a valid status, ${enumToString(Status)}`,
  })
  readonly status: Status;

  @IsNotEmpty({ message: 'The measured field is required' })
  @IsNumber({}, { message: 'The measured field must be numeric' })
  readonly measured: number;

  @IsOptional()
  @IsNumber({}, { message: 'The id apu profile field must be numeric' })
  readonly idApuProfile: number;

  @IsOptional()
  @IsNumber({}, { message: 'The departureId field must be numeric' })
  readonly budgetId: number;

  @IsOptional()
  readonly apuProjectEquipment: ProjectApuEquipmentDto[];

  @IsOptional()
  readonly apuProjectMaterial: ProjectApuMaterialDto[];

  @IsOptional()
  readonly apuProjectSubcontract: ProjectApuSubcontractDto[];

  @IsOptional()
  readonly apuProjectWorkforce: ProjectApuWorkforceDto[];
}
