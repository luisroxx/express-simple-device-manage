"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceNotFoundException = void 0;
const http_status_codes_1 = require("http-status-codes");
const HttpException_1 = require("../../core/exception/HttpException");
class DeviceNotFoundException extends HttpException_1.HttpException {
    constructor(id) {
        super(http_status_codes_1.StatusCodes.NOT_FOUND, `Device with ${id} was not found`);
    }
}
exports.DeviceNotFoundException = DeviceNotFoundException;
//# sourceMappingURL=DeviceNotFoundException.js.map