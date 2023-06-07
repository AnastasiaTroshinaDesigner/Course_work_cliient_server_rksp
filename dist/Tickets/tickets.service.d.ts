import { Repository } from 'typeorm';
import { IncompleteTicketDto } from './dto/incomplete-ticket.dto';
import { CreateTicketDto } from './dto/ticket-dto';
import { Ticket } from './ticket.entity';
import { Events } from 'src/events/events.entity';
import { Visiters } from 'src/visiters/visiters.entity';
export declare class TicketsService {
    private readonly ticketRepository;
    private readonly eventsRepository;
    private readonly visitersRepository;
    constructor(ticketRepository: Repository<Ticket>, eventsRepository: Repository<Events>, visitersRepository: Repository<Visiters>);
    create(ticketDto: CreateTicketDto): Promise<Ticket>;
    findOne(id: number): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    update(id: number, updatedticket: CreateTicketDto): Promise<Ticket>;
    remove(id: number): void;
    findIncomplete(): Promise<IncompleteTicketDto[]>;
}
