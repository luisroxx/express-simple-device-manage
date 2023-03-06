import * as express from "express";
import { exceptionMiddleware, logMiddleware } from "./core/middleware/";
import { factoryBurlingon, factoryWilmington } from "./core/seed";
import { factories } from "./device/repository/device";
import { deviceRouter } from "./device/routes/routes";
import cors = require("cors");

export function createServer() {
  initializeBaseData();
  const app = initializeExpress();
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
