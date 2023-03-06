"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express = require("express");
const middleware_1 = require("./core/middleware/");
const seed_1 = require("./core/seed");
const device_1 = require("./device/repository/device");
const routes_1 = require("./device/routes/routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");
function createServer() {
    initializeBaseData();
    const app = initializeExpress();
    return app;
}
exports.createServer = createServer;
function initializeExpress() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(middleware_1.logMiddleware);
    app.use("/devices", routes_1.deviceRouter);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(middleware_1.exceptionMiddleware);
    return app;
}
function initializeBaseData() {
    device_1.factories.set(1, (0, seed_1.factoryBurlingon)());
    device_1.factories.set(2, (0, seed_1.factoryWilmington)());
}
//# sourceMappingURL=server.js.map