import { VisitersService } from './visiters.service';
import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Visiters } from './visiters.entity';
import { CreateVisitorsDto } from './dto/visiter-dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('visiters')
@ApiTags('Посетители')
export class VisitersController {
  constructor(private readonly visitersService: VisitersService) {}
  @ApiOperation({
    summary: 'Получение всей информации',
  })
  @Get()
  findAll() {
    return this.visitersService.findAll();
  }

  @ApiOperation({ summary: 'Получение неполной информации' })
  @Get('incomplete')
  findIncomplete() {
    this.visitersService.findIncomplete();
  }

  @ApiOperation({ summary: 'Получение информациb по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitersService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Изменение информации' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateVisiters: Visiters) {
    return this.visitersService.update(+id, updateVisiters);
  }

  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Создание записи' })
  @Post()
  create(@Body() Visiters: CreateVisitorsDto) {
    return this.visitersService.create(Visiters);
  }

  @ApiOperation({ summary: 'Удаление по id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitersService.remove(+id);
  }
}
