"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
function logMiddleware(request, _, next) {
    const logObject = {
        httpVersion: request.httpVersion,
        remoteFamily: request.socket.remoteFamily,
        remoteAddress: request.ip,
        remotePort: request.socket.remotePort,
        method: request.method,
        path: request.baseUrl,
        url: request.url,
        headers: convertToKeyValuePair(request.rawHeaders),
    };
    console.log(logObject);
    next();
}
exports.logMiddleware = logMiddleware;
function convertToKeyValuePair(rawHeaders) {
    const headers = [];
    let keyval;
    for (let i = 0; i < rawHeaders.length; i++) {
        const rawHeader = rawHeaders[i];
        if (i % 2 === 0) {
            keyval = {
                field: rawHeader,
                value: "",
            };
        }
        else {
            keyval.value = rawHeader;
            headers.push(keyval);
        }
    }
    return headers;
}
//# sourceMappingURL=logging.js.map