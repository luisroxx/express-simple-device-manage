"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceRouter = void 0;
const express_1 = require("express");
const validator_1 = require("../../core/middleware/validator");
const device_1 = require("../controller/device");
const RequestParamId_1 = require("../controller/request/RequestParamId");
const deviceRouter = (0, express_1.Router)();
exports.deviceRouter = deviceRouter;
deviceRouter.get("/", device_1.list);
deviceRouter.get("/:id", (0, validator_1.validatorMiddleware)([
    {
        target: validator_1.ValidationType.PATH_PARAMETER,
        requestClass: RequestParamId_1.RequestParamId,
    },
]), device_1.findOne);
//# sourceMappingURL=routes.js.map