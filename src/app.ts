import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import Logger from "./domain/ports/Logger";
import container from "./infrastructure/diContainer";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

const logger: Logger = container.resolve("Logger");

const port = process.env.PORT || 3000;

app.listen(port, () =>
  logger.info(`Example app listening at http://localhost:${port}`)
);
