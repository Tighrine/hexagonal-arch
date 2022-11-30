import { Status } from "../../utils/Types";

export default interface Database {
    ping(): Promise<Status>;
}