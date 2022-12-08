import { autoInjectable, inject } from "tsyringe";

import { ServiceStatus } from "./../../utils/Types";
import Database from "./../ports/Database";
import Logger from "../ports/Logger";

export type Health =
  | {
      database: ServiceStatus;
    }
  | {
      status: "ok";
    };

@autoInjectable()
class HealthCheck {
  private logger: Logger;
  private database: Database;

  constructor(
    @inject("Logger") logger?: Logger,
    @inject("Database") database?: Database
  ) {
    this.logger = logger!;
    this.database = database!;
  }

  async execute(): Promise<Health> {
    this.logger.info("Start services health check...");

    return {
        database: await this.database.ping()
    };
  }

}

export default HealthCheck;