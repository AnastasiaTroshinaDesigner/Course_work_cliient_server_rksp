import { Events } from 'src/events/events.entity';
import { Visiters } from 'src/visiters/visiters.entity';
export declare class Ticket {
    id: number;
    fullname: string;
    position: string;
    event: Events;
    visiter: Visiters;
}
