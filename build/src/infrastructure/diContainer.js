"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const WinstonLogger_1 = __importDefault(require("./adapters/WinstonLogger"));
tsyringe_1.container.register("Logger", {
    useValue: new WinstonLogger_1.default()
});
exports.default = tsyringe_1.container;
//# sourceMappingURL=diContainer.js.map