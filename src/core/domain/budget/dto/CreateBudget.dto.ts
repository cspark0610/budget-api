import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsNotEmpty({ message: 'Code unit field is required' })
  @IsString({ message: 'The Code field must be string' })
  code: string;

  @IsNotEmpty({ message: 'Name field is required' })
  @IsString({ message: 'Name field must be string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Description field must be string' })
  description: string;

  @IsOptional()
  @IsString({ message: 'Site field must be string' })
  site: string;

  @IsOptional()
  @IsNumber({}, { message: 'Cost WorkForce field must be numeric' })
  costWorkforce: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost Material field must be numeric' })
  costMaterial: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost Equipment field must be numeric' })
  costEquipment: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost SubContract HH field must be numeric' })
  costSubcontract: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost Procura field must be numeric' })
  costProcura: number;

  @IsOptional()
  @IsNumber({}, { message: 'Hours Man field must be numeric' })
  hoursMan: number;

  @IsOptional()
  @IsNumber({}, { message: 'Company Id field must be numeric' })
  companyId: number;
}
