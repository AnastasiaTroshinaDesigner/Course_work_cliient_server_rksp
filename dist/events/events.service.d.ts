import { Repository } from 'typeorm';
import { Events } from './events.entity';
import { CreateEventDto } from './dto/event-dto';
export declare class EventsService {
    private readonly eventsRepository;
    constructor(eventsRepository: Repository<Events>);
    create(eventsDto: CreateEventDto): Promise<Events>;
    findOne(id: number): Promise<Events>;
    findAll(): Promise<Events[]>;
    update(id: number, updatedEvnt: Events): Promise<Events>;
    remove(id: number): void;
}
