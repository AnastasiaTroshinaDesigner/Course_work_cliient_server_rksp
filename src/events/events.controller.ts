import { EventsService } from './events.service';
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
import { Events } from './events.entity';
import { CreateEventDto } from './dto/event-dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('events')
@ApiTags('Мероприятия')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}
  @ApiOperation({
    summary: 'Получение всей информации',
  })
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @ApiOperation({ summary: 'Получение информациb по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Изменение информации' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEvents: Events) {
    return this.eventsService.update(+id, updateEvents);
  }

  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Создание записи' })
  @Post()
  create(@Body() createEvents: CreateEventDto) {
    return this.eventsService.create(createEvents);
  }

  @ApiOperation({ summary: 'Удаление по id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
