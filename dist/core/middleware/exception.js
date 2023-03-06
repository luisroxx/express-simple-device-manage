"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionMiddleware = void 0;
const HttpException_1 = require("../exception/HttpException");
function exceptionMiddleware(err, _, response, __) {
    console.error(err);
    if (err instanceof HttpException_1.HttpException) {
        response.status(err.statusCode).send(err);
        return;
    }
    response.status(500);
}
exports.exceptionMiddleware = exceptionMiddleware;
//# sourceMappingURL=exception.js.map