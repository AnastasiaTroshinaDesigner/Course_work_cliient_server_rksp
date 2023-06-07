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
exports.VisitersController = void 0;
const visiters_service_1 = require("./visiters.service");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const visiters_entity_1 = require("./visiters.entity");
const visiter_dto_1 = require("./dto/visiter-dto");
const swagger_1 = require("@nestjs/swagger");
let VisitersController = class VisitersController {
    constructor(visitersService) {
        this.visitersService = visitersService;
    }
    findAll() {
        return this.visitersService.findAll();
    }
    findIncomplete() {
        this.visitersService.findIncomplete();
    }
    findOne(id) {
        return this.visitersService.findOne(+id);
    }
    update(id, updateVisiters) {
        return this.visitersService.update(+id, updateVisiters);
    }
    create(Visiters) {
        return this.visitersService.create(Visiters);
    }
    remove(id) {
        return this.visitersService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Получение всей информации',
    }),
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisitersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение неполной информации' }),
    (0, common_2.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisitersController.prototype, "findIncomplete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение информациb по id' }),
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitersController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiOperation)({ summary: 'Изменение информации' }),
    (0, common_2.Put)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, visiters_entity_1.Visiters]),
    __metadata("design:returntype", void 0)
], VisitersController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiOperation)({ summary: 'Создание записи' }),
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [visiter_dto_1.CreateVisitorsDto]),
    __metadata("design:returntype", void 0)
], VisitersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление по id' }),
    (0, common_2.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitersController.prototype, "remove", null);
VisitersController = __decorate([
    (0, common_1.Controller)('visiters'),
    (0, swagger_1.ApiTags)('Посетители'),
    __metadata("design:paramtypes", [visiters_service_1.VisitersService])
], VisitersController);
exports.VisitersController = VisitersController;
//# sourceMappingURL=visiters.controller.js.map