"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceRouter = void 0;
const express_1 = require("express");
const validator_1 = require("../../core/middleware/validator");
const device_1 = require("../controller/device");
const RequestBodyCreateDevice_1 = require("../controller/request/RequestBodyCreateDevice");
const RequestParamId_1 = require("../controller/request/RequestParamId");
const deviceRouter = (0, express_1.Router)();
exports.deviceRouter = deviceRouter;
deviceRouter.get("/", device_1.DeviceController.list);
deviceRouter.post("/", (0, validator_1.validatorMiddleware)([
    {
        target: validator_1.ValidationType.REQUEST_BODY,
        requestClass: RequestBodyCreateDevice_1.RequestBodyCreateDevice,
    },
]), device_1.DeviceController.create);
deviceRouter.put("/:id", (0, validator_1.validatorMiddleware)([
    {
        target: validator_1.ValidationType.REQUEST_BODY,
        requestClass: RequestBodyCreateDevice_1.RequestBodyCreateDevice,
    },
    {
        target: validator_1.ValidationType.PATH_PARAMETER,
        requestClass: RequestParamId_1.RequestParamId,
    },
]), device_1.DeviceController.put);
deviceRouter.get("/:id", (0, validator_1.validatorMiddleware)([
    {
        target: validator_1.ValidationType.PATH_PARAMETER,
        requestClass: RequestParamId_1.RequestParamId,
    },
]), device_1.DeviceController.findOne);
deviceRouter.delete("/:id", (0, validator_1.validatorMiddleware)([
    {
        target: validator_1.ValidationType.PATH_PARAMETER,
        requestClass: RequestParamId_1.RequestParamId,
    },
]), device_1.DeviceController.del);
//# sourceMappingURL=routes.js.map