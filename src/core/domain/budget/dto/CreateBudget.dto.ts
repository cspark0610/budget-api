import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsNotEmpty({ message: 'Code unit field is required' })
  @IsString({ message: 'The Code field must be string' })
  readonly code: string;

  @IsNotEmpty({ message: 'Name field is required' })
  @IsString({ message: 'Name field must be string' })
  readonly name: string;

  @IsOptional()
  @IsString({ message: 'Description field must be string' })
  readonly description: string;

  @IsOptional()
  @IsString({ message: 'Site field must be string' })
  readonly site: string;

  @IsOptional()
  @IsNumber({}, { message: 'Cost WorkForce field must be numeric' })
  readonly costWorkforce: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost Material field must be numeric' })
  readonly costMaterial: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost Equipment field must be numeric' })
  readonly costEquipment: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost SubContract HH field must be numeric' })
  readonly costSubcontract: number;

  @IsOptional()
  @IsNumber({}, { message: 'Cost Procura field must be numeric' })
  readonly costProcura: number;

  @IsOptional()
  @IsNumber({}, { message: 'Hours Man field must be numeric' })
  readonly hoursMan: number;

  @IsOptional()
  @IsNumber({}, { message: 'Company Id field must be numeric' })
  readonly companyId: number;
}
