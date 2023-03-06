import { StatusCodes } from "http-status-codes";
import { HttpException } from "../../core/exception/HttpException";

export class DeviceNotFoundException extends HttpException {
  constructor(id: number) {
    super(StatusCodes.NOT_FOUND, `Device with id: ${id} was not found`);
  }
}
