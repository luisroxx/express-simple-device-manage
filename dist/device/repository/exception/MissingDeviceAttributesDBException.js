"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingDeviceAttributesDBException = void 0;
const http_status_codes_1 = require("http-status-codes");
const HttpException_1 = require("../../../core/exception/HttpException");
class MissingDeviceAttributesDBException extends HttpException_1.HttpException {
    constructor(id) {
        super(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, `Missing values for DeviceAttributes with id's: ${id.join(",")}`);
    }
}
exports.MissingDeviceAttributesDBException = MissingDeviceAttributesDBException;
//# sourceMappingURL=MissingDeviceAttributesDBException.js.map