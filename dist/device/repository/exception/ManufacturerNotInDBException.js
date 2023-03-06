"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerNotInDBException = void 0;
const http_status_codes_1 = require("http-status-codes");
const HttpException_1 = require("../../../core/exception/HttpException");
class ManufacturerNotInDBException extends HttpException_1.HttpException {
    constructor(id) {
        super(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, `Manufacturer with id: ${id} does not exist in database`);
    }
}
exports.ManufacturerNotInDBException = ManufacturerNotInDBException;
//# sourceMappingURL=ManufacturerNotInDBException.js.map