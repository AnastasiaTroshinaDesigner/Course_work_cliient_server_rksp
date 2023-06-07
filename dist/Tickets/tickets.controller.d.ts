import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/ticket-dto';
export declare class TicketsController {
    private readonly TicketsService;
    constructor(TicketsService: TicketsService);
    findAll(): Promise<import("./ticket.entity").Ticket[]>;
    findIncomplete(): void;
    findOne(id: string): Promise<import("./ticket.entity").Ticket>;
    update(id: string, updateTicket: CreateTicketDto): Promise<import("./ticket.entity").Ticket>;
    create(TicketDto: CreateTicketDto): Promise<import("./ticket.entity").Ticket>;
    remove(id: string): void;
}
