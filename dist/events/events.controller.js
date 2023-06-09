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
exports.EventsController = void 0;
const events_service_1 = require("./events.service");
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const events_entity_1 = require("./events.entity");
const event_dto_1 = require("./dto/event-dto");
const swagger_1 = require("@nestjs/swagger");
let EventsController = class EventsController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    findAll() {
        return this.eventsService.findAll();
    }
    findOne(id) {
        return this.eventsService.findOne(+id);
    }
    update(id, updateEvents) {
        return this.eventsService.update(+id, updateEvents);
    }
    create(createEvents) {
        return this.eventsService.create(createEvents);
    }
    remove(id) {
        return this.eventsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Получение всей информации',
    }),
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение информациb по id' }),
    (0, decorators_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findOne", null);
__decorate([
    (0, decorators_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение информации' }),
    (0, decorators_1.Put)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, events_entity_1.Events]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "update", null);
__decorate([
    (0, decorators_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiOperation)({ summary: 'Создание записи' }),
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление по id' }),
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "remove", null);
EventsController = __decorate([
    (0, common_1.Controller)('events'),
    (0, swagger_1.ApiTags)('Мероприятия'),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsController);
exports.EventsController = EventsController;
//# sourceMappingURL=events.controller.js.map