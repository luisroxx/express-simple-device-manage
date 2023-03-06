"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.errorMessage = message;
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=HttpException.js.map