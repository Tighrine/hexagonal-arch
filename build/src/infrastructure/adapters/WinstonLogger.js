"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
class WinstonLogger {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'debug',
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.json(), winston_1.format.printf(({ level, message, timestamp, ...metadata }) => {
                let service = (metadata === null || metadata === void 0 ? void 0 : metadata.service) || "";
                let functionName = (metadata === null || metadata === void 0 ? void 0 : metadata.functionName) || "";
                return `${timestamp} [${level}] ${service ? '[' + service + ']' : ""} ${functionName ? '[' + functionName + ']' : ""} :${message}`;
            })),
            transports: [
                //Log to file only if log level is less than or equal to warn
                new winston_1.transports.File({ filename: 'app.log', level: 'warn' }),
                new winston_1.transports.Console()
            ]
        });
    }
    error(message) {
        this.logger.error(message);
    }
    warn(message) {
        this.logger.warn(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    info(message) {
        this.logger.info(message);
    }
}
exports.default = WinstonLogger;
//# sourceMappingURL=WinstonLogger.js.map