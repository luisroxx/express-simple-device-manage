import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  RequestBody,
  RequestBodyParams,
  RequestParams,
} from "../../core/types/";
import { DeviceService } from "../service/device";
import { RequestBodyCreateDevice, RequestParamId } from "./request";
import { DeviceMapper } from "./response";

export const DeviceController = {
  list: (_: Request, res: Response) => {
    const devices = DeviceService.getDevices();
    res
      .status(StatusCodes.OK)
      .send(devices.map((device) => DeviceMapper.toResponse(device)));
  },

  findOne: (req: RequestParams<RequestParamId>, res: Response) => {
    const device = DeviceService.findOne(req.params.id);
    res.status(StatusCodes.OK).send(DeviceMapper.toResponse(device));
  },

  create: (req: RequestBody<RequestBodyCreateDevice>, res: Response) => {
    const device = DeviceService.postDevice(req.body);
    res.status(StatusCodes.OK).send(DeviceMapper.toResponse(device));
  },

  del: (req: RequestParams<RequestParamId>, res: Response) => {
    DeviceService.deleteDevice(req.params.id);
    res.sendStatus(StatusCodes.OK);
  },

  put: (
    req: RequestBodyParams<RequestBodyCreateDevice, RequestParamId>,
    res: Response
  ) => {
    const device = DeviceService.putDevice(req.params.id, req.body);
    res.status(StatusCodes.OK).send(DeviceMapper.toResponse(device));
  },
};
