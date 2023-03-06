"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceNotInDBException = void 0;
const http_status_codes_1 = require("http-status-codes");
const HttpException_1 = require("../../../core/exception/HttpException");
class DeviceNotInDBException extends HttpException_1.HttpException {
    constructor(id) {
        super(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, `Device with id: ${id} does not exist in database`);
    }
}
exports.DeviceNotInDBException = DeviceNotInDBException;
//# sourceMappingURL=DeviceNotInDBException.js.map