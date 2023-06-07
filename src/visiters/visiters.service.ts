import { Injectable } from '@nestjs/common/decorators';
import { Visiters } from './visiters.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncompleteVisitersDto } from './dto/incomplete-visiters.dto';
import { CreateVisitorsDto } from './dto/visiter-dto';
import { Ticket } from 'src/Tickets/ticket.entity';

@Injectable()
export class VisitersService {
  constructor(
    @InjectRepository(Visiters)
    private readonly visitersRepository: Repository<Visiters>, // "внедряем" репозиторий Visiters в сервис
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>, // "внедряем" репозиторий Visiters в сервис
  ) {}

  async create(visitersDto: CreateVisitorsDto): Promise<Visiters> {
    //получаем объект CreateAuthorDto
    const visiters = this.visitersRepository.create(); //создаем объект Author из репозитория
    visiters.fullname = visitersDto.fullname; //заполняем поля объекта Author
    visiters.age = visitersDto.age;
    visiters.lgota = visitersDto.lgota;

    await this.visitersRepository.save(visiters); //сохраняем объект Author в БД
    return visiters; //возвращаем объект Author
  }

  findOne(id: number): Promise<Visiters> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.visitersRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
    });
  }

  async findAll(): Promise<Visiters[]> {
    const visiters = await this.visitersRepository.find(); //получаем массив Author из БД
    return visiters; //возвращаем массив Author
  }

  async update(id: number, updatedVisiters: Visiters) {
    //получаем объект Author для обновления по id
    const visiters = await this.visitersRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
    visiters.fullname = updatedVisiters.fullname; //обновляем поля объекта Author
    visiters.age = updatedVisiters.age;
    visiters.lgota = updatedVisiters.lgota;

    await this.visitersRepository.save(visiters); //сохраняем объект Author в БД

    return visiters; //возвращаем объект Author
  }

  remove(id: number) {
    this.visitersRepository.delete({ id }); //удаляем объект Author из БД
  }
  async findIncomplete(): Promise<IncompleteVisitersDto[]> {
    const visiters = await this.visitersRepository.find(); //получаем массив Author из БД
    const incompleteVisiters: IncompleteVisitersDto[] = visiters.map(
      (visiters) => {
        //преобразуем массив Author в массив IncompleteAuthorDto
        const incompleteVisiters = new IncompleteVisitersDto();
        incompleteVisiters.id = visiters.id;
        incompleteVisiters.age = visiters.age;
        return incompleteVisiters;
      },
    );
    return incompleteVisiters; //возвращаем массив IncompleteAuthorDto
  }
}
