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
exports.VisitersService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const visiters_entity_1 = require("./visiters.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const incomplete_visiters_dto_1 = require("./dto/incomplete-visiters.dto");
const ticket_entity_1 = require("../Tickets/ticket.entity");
let VisitersService = class VisitersService {
    constructor(visitersRepository, ticketRepository) {
        this.visitersRepository = visitersRepository;
        this.ticketRepository = ticketRepository;
    }
    async create(visitersDto) {
        const visiters = this.visitersRepository.create();
        visiters.fullname = visitersDto.fullname;
        visiters.age = visitersDto.age;
        visiters.lgota = visitersDto.lgota;
        await this.visitersRepository.save(visiters);
        return visiters;
    }
    findOne(id) {
        return this.visitersRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const visiters = await this.visitersRepository.find();
        return visiters;
    }
    async update(id, updatedVisiters) {
        const visiters = await this.visitersRepository.findOne({ where: { id } });
        visiters.fullname = updatedVisiters.fullname;
        visiters.age = updatedVisiters.age;
        visiters.lgota = updatedVisiters.lgota;
        await this.visitersRepository.save(visiters);
        return visiters;
    }
    remove(id) {
        this.visitersRepository.delete({ id });
    }
    async findIncomplete() {
        const visiters = await this.visitersRepository.find();
        const incompleteVisiters = visiters.map((visiters) => {
            const incompleteVisiters = new incomplete_visiters_dto_1.IncompleteVisitersDto();
            incompleteVisiters.id = visiters.id;
            incompleteVisiters.age = visiters.age;
            return incompleteVisiters;
        });
        return incompleteVisiters;
    }
};
VisitersService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(visiters_entity_1.Visiters)),
    __param(1, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VisitersService);
exports.VisitersService = VisitersService;
//# sourceMappingURL=visiters.service.js.map