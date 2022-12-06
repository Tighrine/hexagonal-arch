import { ServiceStatus } from "../../utils/Types";

export interface Database {
    ping(): Promise<ServiceStatus>;
}