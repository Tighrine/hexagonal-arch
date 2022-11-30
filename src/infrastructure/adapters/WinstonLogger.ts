import winston, { createLogger, format, transports }from "winston";
import Logger, { metadata } from "../../domain/ports/Logger";

class WinstonLogger implements Logger {
    private logger: winston.Logger;

    constructor() {
        this.logger = createLogger({
            level: 'debug',
            format: format.combine(
                format.colorize(),
                format.timestamp(),
                format.json(),
                format.printf(({ level, message, timestamp, ...metadata }) => {
                    let service = metadata?.service || "";
                    let functionName = metadata?.functionName || "";
                    return `${timestamp} [${level}]${service ? '[' + service + ']' : ""}${functionName ? '[' + functionName + ']' : ""}: ${message}`;
                })
            ),
            transports: [
                //Log to file only if log level is less than or equal to warn
                new transports.File({ filename: 'app.log', level: 'warn' }),
                new transports.Console()
            ]
        });
    }

    error(message: any, metadataInfo: metadata): void {
        this.logger.error(message, metadataInfo);
    }
    warn(message: any, metadataInfo: metadata): void {
        this.logger.warn(message, metadataInfo);
    }
    debug(message: any, metadataInfo: metadata): void {
        this.logger.debug(message, metadataInfo);
    }
    info(message: any, metadataInfo: metadata): void {
        this.logger.info(message, metadataInfo);
    }

}

export default WinstonLogger;
