import * as express from "express";
import { exceptionMiddleware, logMiddleware } from "./core/middleware/";
import { factoryBurlingon, factoryWilmington } from "./core/seed";
import { factories } from "./device/repository/device";
import { deviceRouter } from "./device/routes/routes";

import cors = require("cors");

export function createServer() {
  initializeBaseData();
  const app = initializeExpress();
  initializeSwagger(app);
  return app;
}

function initializeExpress() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(logMiddleware);

  app.use("/devices", deviceRouter);

  app.use(exceptionMiddleware);
  return app;
}

function initializeBaseData() {
  factories.set(1, factoryBurlingon());
  factories.set(2, factoryWilmington());
}

function initializeSwagger(app: express.Express) {
  if (process.env.NODE_ENV !== "test") {
    const swaggerUi = require("swagger-ui-express");
    const swaggerDocument = require("./swagger.json");
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}
