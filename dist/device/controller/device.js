"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.del = exports.create = exports.findOne = exports.list = void 0;
const http_status_codes_1 = require("http-status-codes");
const device_1 = require("../service/device");
const list = (_, res) => {
    const devices = (0, device_1.getDevices)();
    res.status(http_status_codes_1.StatusCodes.OK).send(devices);
};
exports.list = list;
const findOne = (req, res) => {
    const device = (0, device_1.findOne)(req.params.id);
    res.status(http_status_codes_1.StatusCodes.OK).send(device);
};
exports.findOne = findOne;
const create = (req, res) => {
    (0, device_1.postDevice)();
    res.sendStatus(http_status_codes_1.StatusCodes.OK);
};
exports.create = create;
const del = (req, res) => {
    (0, device_1.deleteDevice)(req.params.id);
    res.sendStatus(http_status_codes_1.StatusCodes.OK);
};
exports.del = del;
const put = (req, res) => {
    (0, device_1.putDevice)();
    res.sendStatus(http_status_codes_1.StatusCodes.OK);
};
exports.put = put;
//# sourceMappingURL=device.js.map