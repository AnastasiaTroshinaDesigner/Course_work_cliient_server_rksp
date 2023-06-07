import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({ example: 'Обычный билет', description: 'Название' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  fullname: string;
  @ApiProperty({ example: 'А1', description: 'Место' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  position: string;
  @ApiProperty({ example: '1', description: 'ID мероприятия' })
  @IsNotEmpty()
  @IsNumber()
  event: number;
  @ApiProperty({ example: '1', description: 'ID посетителя' })
  @IsNotEmpty()
  @IsNumber()
  visiter: number;
}
