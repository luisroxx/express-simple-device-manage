"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putDevice = exports.deleteDevice = exports.postDevice = exports.findOne = exports.getDevices = void 0;
const DeviceNotFoundException_1 = require("../exception/DeviceNotFoundException");
const devices = [];
const getDevices = () => {
    return devices;
};
exports.getDevices = getDevices;
const findOne = (id) => {
    const device = devices.find((device) => device.id === id);
    if (!device) {
        throw new DeviceNotFoundException_1.DeviceNotFoundException(id);
    }
    return device;
};
exports.findOne = findOne;
const postDevice = () => { };
exports.postDevice = postDevice;
const deleteDevice = (id) => {
    const deviceIdx = devices.findIndex((device) => device.id === id);
    if (deviceIdx == -1) {
        throw new DeviceNotFoundException_1.DeviceNotFoundException(id);
    }
    devices.splice(deviceIdx, 1);
};
exports.deleteDevice = deleteDevice;
const putDevice = () => { };
exports.putDevice = putDevice;
//# sourceMappingURL=device.js.map