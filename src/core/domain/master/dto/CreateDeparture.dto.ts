import { IsNotEmpty } from 'class-validator';

export class CreateDepartureDto {
  @IsNotEmpty({ message: 'The name field is required' })
  readonly name: string;

  @IsNotEmpty({ message: 'The code field is required' })
  readonly code: string;

  @IsNotEmpty({ message: 'The description field is required' })
  readonly description: string;

  @IsNotEmpty({ message: 'The unit field is required' })
  readonly unit: string;
}
