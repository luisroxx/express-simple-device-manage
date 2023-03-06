import { StatusCodes } from "http-status-codes";
import { HttpException } from "../../../core/exception/HttpException";

export class FactoryNotInDBException extends HttpException {
  constructor(id: number) {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Factory with id: ${id} does not exist in database`
    );
  }
}
