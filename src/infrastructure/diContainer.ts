import { container } from "tsyringe";
import Logger from "../domain/ports/Logger";
import WinstonLogger from "./adapters/WinstonLogger";

container.register<Logger>("Logger", {
    useValue: new WinstonLogger()
});

export default container;