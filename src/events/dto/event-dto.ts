import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ example: 'Мюзикл', description: 'Название мероприятия' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  fullname: string;
  @ApiProperty({ example: '25', description: 'Дата' })
  @IsNumber()
  @IsNotEmpty()
  date: number;
  @ApiProperty({ example: 'май', description: 'Месяц' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  mounth: string;
}
