import DomainDatabase from "../../../domain/ports/Database";
import { ServiceStatus } from "../../../utils/Types";

export default class Database implements DomainDatabase {
    async ping(): Promise<ServiceStatus> {
        throw new Error("Method not implemented.");
    }
} 