"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const incomplete_ticket_dto_1 = require("./dto/incomplete-ticket.dto");
const ticket_entity_1 = require("./ticket.entity");
const events_entity_1 = require("../events/events.entity");
const visiters_entity_1 = require("../visiters/visiters.entity");
let TicketsService = class TicketsService {
    constructor(ticketRepository, eventsRepository, visitersRepository) {
        this.ticketRepository = ticketRepository;
        this.eventsRepository = eventsRepository;
        this.visitersRepository = visitersRepository;
    }
    async create(ticketDto) {
        const ticket = this.ticketRepository.create();
        ticket.fullname = ticketDto.fullname;
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
        await this.ticketRepository.save(ticket);
        return ticket;
    }
    findOne(id) {
        return this.ticketRepository.findOne({
            where: { id },
            relations: { visiter: true, event: true },
        });
    }
    async findAll() {
        const tickets = await this.ticketRepository.find({
            relations: {
                visiter: true,
                event: true,
            },
        });
        return tickets;
    }
    async update(id, updatedticket) {
        const ticket = await this.ticketRepository.findOne({ where: { id } });
        ticket.fullname = updatedticket.fullname;
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
        await this.ticketRepository.save(ticket);
        return ticket;
    }
    remove(id) {
        this.ticketRepository.delete({ id });
    }
    async findIncomplete() {
        const tickets = await this.ticketRepository.find();
        const incompletetickets = tickets.map((ticket) => {
            const incompleteticket = new incomplete_ticket_dto_1.IncompleteTicketDto();
            incompleteticket.id = ticket.id;
            incompleteticket.position = ticket.position;
            return incompleteticket;
        });
        return incompletetickets;
    }
};
TicketsService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(1, (0, typeorm_1.InjectRepository)(events_entity_1.Events)),
    __param(2, (0, typeorm_1.InjectRepository)(visiters_entity_1.Visiters)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map