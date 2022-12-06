import express from "express";
import { json, urlencoded } from "body-parser";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../../../build/routes";
import SwaggerDocument from "../../../build/swagger.json";
import Logger from "../../domain/ports/Logger";
import container from "../diContainer";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(SwaggerDocument));

RegisterRoutes(app);

const logger: Logger = container.resolve("Logger");

const port = process.env.PORT || 3000;

app.listen(port, () =>
  logger.info(`Example app listening at http://localhost:${port}`)
);
