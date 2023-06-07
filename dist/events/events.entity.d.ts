import { Ticket } from 'src/Tickets/ticket.entity';
export declare class Events {
    id: number;
    fullname: string;
    date: number;
    mounth: string;
    tickets: Ticket[];
}
