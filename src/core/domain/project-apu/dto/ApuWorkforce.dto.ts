import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProjectApuWorkforceDto {
  @IsNotEmpty({ message: 'Price unit field is required' })
  @IsNumber({}, { message: 'The measured field must be numeric' })
  unitPrice: number;

  @IsNumber({}, { message: 'The unit Price Factored field must be numeric' })
  unitPriceFactored: number;

  @IsNotEmpty({ message: 'Quadrille field is required' })
  @IsNumber({}, { message: 'Quadrille field must be numeric' })
  quadrille: number;

  @IsNumber({}, { message: 'quantitymt field must be numeric' })
  quantitymt: number;

  @IsNumber({}, { message: 'Factor field must be numeric' })
  factor: number;

  @IsOptional()
  @IsNumber({}, { message: 'The workforceId field must be numeric' })
  workforceId: number;
}
