import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateVisitorsDto {
  @ApiProperty({ example: 'Николай', description: 'Имя' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  fullname: string;
  @ApiProperty({ example: '30', description: 'Возраст' })
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @ApiProperty({ example: '1', description: 'Льгота' })
  @IsNotEmpty()
  @IsNumber()
  lgota: number;
}
