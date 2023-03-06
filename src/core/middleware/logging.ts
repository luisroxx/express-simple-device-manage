import { NextFunction, Request, Response } from "express";

export function logMiddleware(
  request: Request,
  _: Response,
  next: NextFunction
): void {
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

function convertToKeyValuePair(rawHeaders: string[]) {
  const headers = [];

  let keyval;
  for (let i = 0; i < rawHeaders.length; i++) {
    const rawHeader = rawHeaders[i];
    if (i % 2 === 0) {
      keyval = {
        field: rawHeader,
        value: "",
      };
    } else {
      keyval.value = rawHeader;
      headers.push(keyval);
    }
  }

  return headers;
}
