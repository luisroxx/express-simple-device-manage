import { StatusCodes } from "http-status-codes";
import { HttpException } from "../../../core/exception/HttpException";

export class DeviceNotInDBException extends HttpException {
  constructor(id: number) {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Device with id: ${id} does not exist in database`
    );
  }
}
