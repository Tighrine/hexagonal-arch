export interface metadata {
    service: any,
    functionName: any
}

interface Logger {
    error(message: any, metadataInfo?: metadata): void;
    warn(message: any, metadataInfo?: metadata): void;
    debug(message: any, metadataInfo?: metadata): void;
    info(message: any, metadataInfo?: metadata): void;
}

export default Logger;
