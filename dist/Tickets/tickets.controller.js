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
exports.TicketsController = void 0;
const tickets_service_1 = require("./tickets.service");
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const ticket_dto_1 = require("./dto/ticket-dto");
let TicketsController = class TicketsController {
    constructor(TicketsService) {
        this.TicketsService = TicketsService;
    }
    findAll() {
        return this.TicketsService.findAll();
    }
    findIncomplete() {
        this.TicketsService.findIncomplete();
    }
    findOne(id) {
        return this.TicketsService.findOne(+id);
    }
    update(id, updateTicket) {
        return this.TicketsService.update(+id, updateTicket);
    }
    create(TicketDto) {
        return this.TicketsService.create(TicketDto);
    }
    remove(id) {
        return this.TicketsService.remove(+id);
    }
};
__decorate([
    (0, swagger_2.ApiOperation)({
        summary: 'Получение всей информации',
    }),
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "findAll", null);
__decorate([
    (0, swagger_2.ApiOperation)({ summary: 'Получение неполной информации' }),
    (0, decorators_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "findIncomplete", null);
__decorate([
    (0, swagger_2.ApiOperation)({ summary: 'Получение информациb по id' }),
    (0, decorators_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "findOne", null);
__decorate([
    (0, decorators_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_2.ApiOperation)({ summary: 'Изменение информации' }),
    (0, decorators_1.Put)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "update", null);
__decorate([
    (0, decorators_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_2.ApiOperation)({ summary: 'Создание записи' }),
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "create", null);
__decorate([
    (0, swagger_2.ApiOperation)({ summary: 'Удаление по id' }),
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "remove", null);
TicketsController = __decorate([
    (0, common_1.Controller)('tickets'),
    (0, swagger_1.ApiTags)('Билеты'),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService])
], TicketsController);
exports.TicketsController = TicketsController;
//# sourceMappingURL=tickets.controller.js.map