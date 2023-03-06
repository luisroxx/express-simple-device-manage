import { StatusCodes } from "http-status-codes";
import { HttpException } from "../../core/exception/HttpException";

export class DeviceIPAlreadyInThisFactoryException extends HttpException {
  constructor(factoryId: number, ip: string) {
    super(
      StatusCodes.BAD_REQUEST,
      `Factory with id: ${factoryId} already has a device with ip: ${ip}`
    );
  }
}
