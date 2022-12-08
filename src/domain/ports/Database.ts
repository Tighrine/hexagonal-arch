import { ServiceStatus } from "../../utils/Types";

interface Database {
    ping(): Promise<ServiceStatus>;
}

export default Database;