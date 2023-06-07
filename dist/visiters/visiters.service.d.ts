import { Visiters } from './visiters.entity';
import { Repository } from 'typeorm';
import { IncompleteVisitersDto } from './dto/incomplete-visiters.dto';
import { CreateVisitorsDto } from './dto/visiter-dto';
import { Ticket } from 'src/Tickets/ticket.entity';
export declare class VisitersService {
    private readonly visitersRepository;
    private readonly ticketRepository;
    constructor(visitersRepository: Repository<Visiters>, ticketRepository: Repository<Ticket>);
    create(visitersDto: CreateVisitorsDto): Promise<Visiters>;
    findOne(id: number): Promise<Visiters>;
    findAll(): Promise<Visiters[]>;
    update(id: number, updatedVisiters: Visiters): Promise<Visiters>;
    remove(id: number): void;
    findIncomplete(): Promise<IncompleteVisitersDto[]>;
}
