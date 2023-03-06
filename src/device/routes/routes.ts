import { Router } from "express";
import {
  ValidationType,
  validatorMiddleware,
} from "../../core/middleware/validator";
import { DeviceController } from "../controller/device";
import { RequestBodyCreateDevice } from "../controller/request/RequestBodyCreateDevice";
import { RequestParamId } from "../controller/request/RequestParamId";

const deviceRouter = Router();

deviceRouter.get("/", DeviceController.list);
deviceRouter.post(
  "/",
  validatorMiddleware([
    {
      target: ValidationType.REQUEST_BODY,
      requestClass: RequestBodyCreateDevice,
    },
  ]),
  DeviceController.create
);
deviceRouter.put(
  "/:id",
  validatorMiddleware([
    {
      target: ValidationType.REQUEST_BODY,
      requestClass: RequestBodyCreateDevice,
    },
    {
      target: ValidationType.PATH_PARAMETER,
      requestClass: RequestParamId,
    },
  ]),
  DeviceController.put
);
deviceRouter.get(
  "/:id",
  validatorMiddleware([
    {
      target: ValidationType.PATH_PARAMETER,
      requestClass: RequestParamId,
    },
  ]),
  DeviceController.findOne
);
deviceRouter.delete(
  "/:id",
  validatorMiddleware([
    {
      target: ValidationType.PATH_PARAMETER,
      requestClass: RequestParamId,
    },
  ]),
  DeviceController.del
);

export { deviceRouter };
