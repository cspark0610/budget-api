import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProjectApuMaterialDto {
  @IsNotEmpty({ message: 'Price unit field is required' })
  @IsNumber({}, { message: 'The measured field must be numeric' })
  unitPrice: number;

  @IsNumber({}, { message: 'The unit Price Factored field must be numeric' })
  unitPriceFactored: number;

  @IsNotEmpty({ message: 'Quantity field is required' })
  @IsNumber({}, { message: 'Quantity field must be numeric' })
  quantity: number;

  @IsNumber({}, { message: 'quantitymt field must be numeric' })
  quantitymt: number;

  @IsNumber({}, { message: 'Factor field must be numeric' })
  factor: number;

  @IsOptional()
  @IsNumber({}, { message: 'The materialId field must be numeric' })
  materialId: number;
}
