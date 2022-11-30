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
exports.indexController = void 0;
// src/users/usersController.ts
const tsoa_1 = require("tsoa");
const tsyringe_1 = require("tsyringe");
let indexController = class indexController extends tsoa_1.Controller {
    constructor(logger) {
        super();
        this.logger = logger;
    }
    async get(req) {
        var _a, _b;
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.warn(`This is request to ${req.path}`);
        (_b = this.logger) === null || _b === void 0 ? void 0 : _b.info(`This is an info from ${req.path}`);
        return {
            message: "request received"
        };
    }
};
__decorate([
    (0, tsoa_1.Get)("/logger"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], indexController.prototype, "get", null);
indexController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    (0, tsoa_1.Route)("test"),
    __param(0, (0, tsyringe_1.inject)("Logger")),
    __metadata("design:paramtypes", [Object])
], indexController);
exports.indexController = indexController;
//# sourceMappingURL=indexController.js.map