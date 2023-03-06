"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express = require("express");
const middleware_1 = require("./core/middleware/");
const routes_1 = require("./device/routes/routes");
const cors = require("cors");
function createServer() {
    const app = express();
    app.use(cors());
    app.use(middleware_1.logMiddleware);
    app.use("/devices", routes_1.deviceRouter);
    app.use(middleware_1.exceptionMiddleware);
    return app;
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map