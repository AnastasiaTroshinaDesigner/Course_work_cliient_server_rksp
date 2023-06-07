import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { IncompleteTicketDto } from './dto/incomplete-ticket.dto';
import { CreateTicketDto } from './dto/ticket-dto';
import { Ticket } from './ticket.entity';
import { Events } from 'src/events/events.entity';
import { Visiters } from 'src/visiters/visiters.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>, // "внедряем" репозиторий ticket в сервис
    @InjectRepository(Events)
    private readonly eventsRepository: Repository<Events>, // "внедряем" репозиторий ticket в сервис
    @InjectRepository(Visiters)
    private readonly visitersRepository: Repository<Visiters>, // "внедряем" репозиторий ticket в сервис
  ) {}

  async create(ticketDto: CreateTicketDto): Promise<Ticket> {
    //получаем объект CreateticketDto
    const ticket = this.ticketRepository.create(); //создаем объект ticket из репозитория

    ticket.fullname = ticketDto.fullname; //заполняем поля объекта ticket
    ticket.position = ticketDto.position;

    const events = await this.eventsRepository.findOne({
      where: {
        id: ticketDto.event,
      },
    });

    const visiter = await this.visitersRepository.findOne({
      where: {
        id: ticketDto.visiter,
      },
    });

    ticket.event = events;
    ticket.visiter = visiter;

    await this.ticketRepository.save(ticket); //сохраняем объект ticket в БД

    return ticket; //возвращаем объект ticket
  }

  findOne(id: number): Promise<Ticket> {
    // Promise<ticket> - указывает, что функция возвращает объект ticket в виде Promise (c асинхронного потока)
    return this.ticketRepository.findOne({
      //получаем объект ticket по id
      where: { id }, //указываем условие поиска по id
      relations: { visiter: true, event: true }, //получаем связанные объекты
    });
  }

  // findAll(): tickets[] {
  //     return this.DatasourceService.gettickets();
  // }
  async findAll(): Promise<Ticket[]> {
    const tickets = await this.ticketRepository.find({
      //получаем связанные объекты
      relations: {
        visiter: true,
        event: true,
      },
    }); //получаем массив ticket из БД
    return tickets; //возвращаем массив ticket
  }
  async update(id: number, updatedticket: CreateTicketDto) {
    //получаем объект ticket для обновления по id
    const ticket = await this.ticketRepository.findOne({ where: { id } }); //получаем объект ticket по id из БД

    ticket.fullname = updatedticket.fullname; //обновляем поля объекта ticket
    ticket.position = updatedticket.position;

    const event = await this.eventsRepository.findOne({
      where: {
        id: updatedticket.event,
      },
    });

    const visiter = await this.visitersRepository.findOne({
      where: {
        id: updatedticket.visiter,
      },
    });

    ticket.event = event;
    ticket.visiter = visiter;

    await this.ticketRepository.save(ticket); //сохраняем объект ticket в БД
    return ticket; //возвращаем объект ticket
  }

  remove(id: number) {
    this.ticketRepository.delete({ id }); //удаляем объект ticket из БД
  }

  async findIncomplete(): Promise<IncompleteTicketDto[]> {
    const tickets = await this.ticketRepository.find(); //получаем массив ticket из БД
    const incompletetickets: IncompleteTicketDto[] = tickets.map((ticket) => {
      //преобразуем массив ticket в массив IncompleteticketDto
      const incompleteticket = new IncompleteTicketDto();
      incompleteticket.id = ticket.id;
      incompleteticket.position = ticket.position;
      return incompleteticket;
    });
    return incompletetickets; //возвращаем массив IncompleteticketDto
  }
}
