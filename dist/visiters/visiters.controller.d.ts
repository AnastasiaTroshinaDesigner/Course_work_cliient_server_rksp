import { VisitersService } from './visiters.service';
import { Visiters } from './visiters.entity';
import { CreateVisitorsDto } from './dto/visiter-dto';
export declare class VisitersController {
    private readonly visitersService;
    constructor(visitersService: VisitersService);
    findAll(): Promise<Visiters[]>;
    findIncomplete(): void;
    findOne(id: string): Promise<Visiters>;
    update(id: string, updateVisiters: Visiters): Promise<Visiters>;
    create(Visiters: CreateVisitorsDto): Promise<Visiters>;
    remove(id: string): void;
}
