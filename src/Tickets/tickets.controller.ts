import { TicketsService } from './tickets.service';
import { Controller, ValidationPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
import { CreateTicketDto } from './dto/ticket-dto';

@Controller('tickets')
@ApiTags('Билеты')
export class TicketsController {
  constructor(private readonly TicketsService: TicketsService) {}
  @ApiOperation({
    summary: 'Получение всей информации',
  })
  @Get()
  findAll() {
    return this.TicketsService.findAll();
  }

  @ApiOperation({ summary: 'Получение неполной информации' })
  @Get('incomplete')
  findIncomplete() {
    this.TicketsService.findIncomplete();
  }

  @ApiOperation({ summary: 'Получение информациb по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TicketsService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Изменение информации' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTicket: CreateTicketDto) {
    return this.TicketsService.update(+id, updateTicket);
  }

  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Создание записи' })
  @Post()
  create(@Body() TicketDto: CreateTicketDto) {
    return this.TicketsService.create(TicketDto);
  }

  @ApiOperation({ summary: 'Удаление по id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TicketsService.remove(+id);
  }
}
