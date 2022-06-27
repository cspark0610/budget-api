import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBatchApuProjectDto {
  @IsNotEmpty({ message: 'The sheetName field is required' })
  @IsString({ message: 'The sheetName field is string' })
  readonly sheetName: string;

  @IsNotEmpty({ message: 'The headers field is required' })
  readonly headers: string = JSON.stringify({
    code: 'string',
    name: 'string',
    description: 'string',
    unit: 'string',
    measured: 'string',
  });

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  readonly file: any;
}
