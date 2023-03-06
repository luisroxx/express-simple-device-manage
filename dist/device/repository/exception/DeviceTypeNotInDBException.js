"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceTypeNotInDBException = void 0;
const http_status_codes_1 = require("http-status-codes");
const HttpException_1 = require("../../../core/exception/HttpException");
class DeviceTypeNotInDBException extends HttpException_1.HttpException {
    constructor(id) {
        super(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, `DeviceType with id: ${id} does not exist in database`);
    }
}
exports.DeviceTypeNotInDBException = DeviceTypeNotInDBException;
//# sourceMappingURL=DeviceTypeNotInDBException.js.map