"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorMiddleware = exports.ValidationType = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const status_codes_1 = require("http-status-codes/build/cjs/status-codes");
var ValidationType;
(function (ValidationType) {
    ValidationType[ValidationType["REQUEST_BODY"] = 0] = "REQUEST_BODY";
    ValidationType[ValidationType["PATH_PARAMETER"] = 1] = "PATH_PARAMETER";
    ValidationType[ValidationType["QUERY_PARAMETER"] = 2] = "QUERY_PARAMETER";
})(ValidationType = exports.ValidationType || (exports.ValidationType = {}));
function validatorMiddleware(validators) {
    return async function (req, res, next) {
        const validationErrors = validators.map(async (validator) => {
            const property = propertyFromTarget(validator.target, req);
            const object = (0, class_transformer_1.plainToClass)(validator.requestClass, property);
            return await (0, class_validator_1.validate)(object);
        });
        const results = await Promise.all(validationErrors);
        const errors = results.reduce((acc, val) => acc.concat(val), []);
        if (errors.length) {
            const errorMessages = errors.map((val) => val.constraints);
            console.error(errorMessages);
            res.status(status_codes_1.StatusCodes.BAD_REQUEST).send(errorMessages);
        }
        else {
            next();
        }
    };
}
exports.validatorMiddleware = validatorMiddleware;
function propertyFromTarget(target, req) {
    switch (target) {
        case ValidationType.REQUEST_BODY:
            return Object.assign({}, req.body);
        case ValidationType.PATH_PARAMETER:
            return Object.assign({}, req.params);
        case ValidationType.QUERY_PARAMETER:
            return Object.assign({}, req.query);
    }
}
//# sourceMappingURL=validator.js.map