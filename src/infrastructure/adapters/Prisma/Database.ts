import { Database as IDatabase } from "../../../domain/ports/Database";
import { ServiceStatus } from "../../../utils/Types";

export default class Database implements IDatabase {
    async ping(): Promise<ServiceStatus> {
        throw new Error("Method not implemented.");
    }
} 