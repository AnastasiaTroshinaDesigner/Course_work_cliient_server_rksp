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
exports.Events = void 0;
const swagger_1 = require("@nestjs/swagger");
const ticket_entity_1 = require("../Tickets/ticket.entity");
const typeorm_1 = require("typeorm");
let Events = class Events {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Events.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Лекция "Михаил Врубель"', description: 'Название мероприятия' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25', description: 'Дата' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Events.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'май', description: 'Месяц' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "mounth", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.event),
    __metadata("design:type", Array)
], Events.prototype, "tickets", void 0);
Events = __decorate([
    (0, typeorm_1.Entity)('events')
], Events);
exports.Events = Events;
//# sourceMappingURL=events.entity.js.map