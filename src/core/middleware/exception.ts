import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exception/HttpException";

export function exceptionMiddleware(
  err: any,
  _: Request,
  response: Response,
  __: NextFunction
) {
  console.error(err);
  if (err instanceof HttpException) {
    response.status(err.statusCode).send(err);
    return;
  }

  response.status(500);
}
