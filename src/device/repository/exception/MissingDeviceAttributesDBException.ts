import { StatusCodes } from "http-status-codes";
import { HttpException } from "../../../core/exception/HttpException";

export class MissingDeviceAttributesDBException extends HttpException {
  constructor(id: number[]) {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Missing values for DeviceAttributes with id's: ${id.join(",")}`
    );
  }
}
