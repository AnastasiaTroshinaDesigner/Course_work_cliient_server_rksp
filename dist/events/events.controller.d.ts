import { EventsService } from './events.service';
import { Events } from './events.entity';
import { CreateEventDto } from './dto/event-dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(): Promise<Events[]>;
    findOne(id: string): Promise<Events>;
    update(id: string, updateEvents: Events): Promise<Events>;
    create(createEvents: CreateEventDto): Promise<Events>;
    remove(id: string): void;
}
