"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceIPAlreadyInThisFactoryException = void 0;
const http_status_codes_1 = require("http-status-codes");
const HttpException_1 = require("../../core/exception/HttpException");
class DeviceIPAlreadyInThisFactoryException extends HttpException_1.HttpException {
    constructor(factoryId, ip) {
        super(http_status_codes_1.StatusCodes.BAD_REQUEST, `Factory with id: ${factoryId} already has a device with ip: ${ip}`);
    }
}
exports.DeviceIPAlreadyInThisFactoryException = DeviceIPAlreadyInThisFactoryException;
//# sourceMappingURL=DeviceIPAlreadyInThisFactoryException.js.map