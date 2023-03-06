"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const http_status_codes_1 = require("http-status-codes");
const device_1 = require("../service/device");
const response_1 = require("./response");
exports.DeviceController = {
    list: (_, res) => {
        const devices = device_1.DeviceService.getDevices();
        res
            .status(http_status_codes_1.StatusCodes.OK)
            .send(devices.map((device) => response_1.DeviceMapper.toResponse(device)));
    },
    findOne: (req, res) => {
        const device = device_1.DeviceService.findOne(req.params.id);
        res.status(http_status_codes_1.StatusCodes.OK).send(response_1.DeviceMapper.toResponse(device));
    },
    create: (req, res) => {
        const device = device_1.DeviceService.postDevice(req.body);
        res.status(http_status_codes_1.StatusCodes.OK).send(response_1.DeviceMapper.toResponse(device));
    },
    del: (req, res) => {
        device_1.DeviceService.deleteDevice(req.params.id);
        res.sendStatus(http_status_codes_1.StatusCodes.OK);
    },
    put: (req, res) => {
        const device = device_1.DeviceService.putDevice(req.params.id, req.body);
        res.status(http_status_codes_1.StatusCodes.OK).send(response_1.DeviceMapper.toResponse(device));
    },
};
//# sourceMappingURL=device.js.map