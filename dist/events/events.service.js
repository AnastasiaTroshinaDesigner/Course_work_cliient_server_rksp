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
exports.EventsService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const events_entity_1 = require("./events.entity");
let EventsService = class EventsService {
    constructor(eventsRepository) {
        this.eventsRepository = eventsRepository;
    }
    async create(eventsDto) {
        const event = this.eventsRepository.create();
        event.fullname = eventsDto.fullname;
        event.date = eventsDto.date;
        event.mounth = eventsDto.mounth;
        await this.eventsRepository.save(event);
        return event;
    }
    findOne(id) {
        return this.eventsRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const visiters = await this.eventsRepository.find();
        return visiters;
    }
    async update(id, updatedEvnt) {
        const event = await this.eventsRepository.findOne({ where: { id } });
        event.fullname = updatedEvnt.fullname;
        event.date = updatedEvnt.date;
        event.mounth = updatedEvnt.mounth;
        await this.eventsRepository.save(event);
        return event;
    }
    remove(id) {
        this.eventsRepository.delete({ id });
    }
};
EventsService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(events_entity_1.Events)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map