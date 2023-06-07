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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const swagger_1 = require("@nestjs/swagger");
const events_entity_1 = require("../events/events.entity");
const visiters_entity_1 = require("../visiters/visiters.entity");
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Лекция "Михаил Врубель".Льготный', description: 'Название билета' }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Ticket.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Активный', description: 'Статус билета' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ticket.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => events_entity_1.Events, (event) => event.tickets),
    __metadata("design:type", events_entity_1.Events)
], Ticket.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => visiters_entity_1.Visiters, (event) => event.tickets),
    __metadata("design:type", visiters_entity_1.Visiters)
], Ticket.prototype, "visiter", void 0);
Ticket = __decorate([
    (0, typeorm_1.Entity)('tickets')
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.entity.js.map