import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Events } from './events.entity';
import { CreateEventDto } from './dto/event-dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private readonly eventsRepository: Repository<Events>, // "внедряем" репозиторий Visiters в сервис
  ) {}

  async create(eventsDto: CreateEventDto): Promise<Events> {
    //получаем объект CreateAuthorDto
    const event = this.eventsRepository.create(); //создаем объект Author из репозитория

    event.fullname = eventsDto.fullname; //заполняем поля объекта Author
    event.date = eventsDto.date;
    event.mounth = eventsDto.mounth;

    await this.eventsRepository.save(event); //сохраняем объект Author в БД

    return event; //возвращаем объект Author
  }

  findOne(id: number): Promise<Events> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.eventsRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
    });
  }

  async findAll(): Promise<Events[]> {
    const visiters = await this.eventsRepository.find(); //получаем массив Author из БД

    return visiters; //возвращаем массив Author
  }

  async update(id: number, updatedEvnt: Events) {
    //получаем объект Author для обновления по id
    const event = await this.eventsRepository.findOne({ where: { id } }); //получаем объект Author по id из БД

    event.fullname = updatedEvnt.fullname; //обновляем поля объекта Author
    event.date = updatedEvnt.date;
    event.mounth = updatedEvnt.mounth;

    await this.eventsRepository.save(event); //сохраняем объект Author в БД

    return event; //возвращаем объект Author
  }

  remove(id: number) {
    this.eventsRepository.delete({ id }); //удаляем объект Author из БД
  }
}
