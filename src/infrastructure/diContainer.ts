import { container } from "tsyringe";
import DomainDatabase from "../domain/ports/Database";
import Logger from "../domain/ports/Logger";
import WinstonLogger from "./adapters/WinstonLogger";
import Database from "./adapters/TypeORM/Database";

container.register<Logger>("Logger", {
    useValue: new WinstonLogger()
});

container.register<DomainDatabase>("Database", {
    useValue: new Database()
});

export default container;