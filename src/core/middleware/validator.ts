import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";

export enum ValidationType {
  REQUEST_BODY,
  PATH_PARAMETER,
  QUERY_PARAMETER,
}

export type ValidationTarget =
  | ValidationType.REQUEST_BODY
  | ValidationType.PATH_PARAMETER
  | ValidationType.QUERY_PARAMETER;

export interface Validation {
  target: ValidationType;
  requestClass: ClassConstructor<any>;
}

export function validatorMiddleware(validators: Validation[]) {
  return async function (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const validationErrors = validators.map(async (validator) => {
      const property = propertyFromTarget(validator.target, req);
      const object: Record<string, any> = plainToClass(
        validator.requestClass,
        property
      );
      return await validate(object);
    });

    const results = await Promise.all(validationErrors);
    const errors = results.reduce((acc, val) => acc.concat(val), []);

    if (errors.length) {
      const errorMessages = errors.map((val) => val.constraints);
      console.error(errorMessages);
      res.status(StatusCodes.BAD_REQUEST).send(errorMessages);
    } else {
      next();
    }
  };
}

function propertyFromTarget(
  target: ValidationTarget,
  req: Request
): Record<string, any> {
  switch (target) {
    case ValidationType.REQUEST_BODY:
      return { ...req.body };
    case ValidationType.PATH_PARAMETER:
      return { ...req.params };
    case ValidationType.QUERY_PARAMETER:
      return { ...req.query };
  }
}
