"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBodyAttributes = exports.RequestBodyCreateDevice = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class RequestBodyCreateDevice {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], RequestBodyCreateDevice.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsIP)("4")
], RequestBodyCreateDevice.prototype, "ip", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value), { toClassOnly: true }),
    (0, class_validator_1.IsInt)()
], RequestBodyCreateDevice.prototype, "factoryId", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value), { toClassOnly: true }),
    (0, class_validator_1.IsInt)()
], RequestBodyCreateDevice.prototype, "manufacturerId", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value), { toClassOnly: true }),
    (0, class_validator_1.IsInt)()
], RequestBodyCreateDevice.prototype, "deviceTypeId", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Boolean(value), { toClassOnly: true }),
    (0, class_validator_1.IsBoolean)()
], RequestBodyCreateDevice.prototype, "isOnline", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true })
], RequestBodyCreateDevice.prototype, "attributes", void 0);
exports.RequestBodyCreateDevice = RequestBodyCreateDevice;
class RequestBodyAttributes {
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value), { toClassOnly: true }),
    (0, class_validator_1.IsInt)()
], RequestBodyAttributes.prototype, "deviceAttributesEntityId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], RequestBodyAttributes.prototype, "value", void 0);
exports.RequestBodyAttributes = RequestBodyAttributes;
//# sourceMappingURL=RequestBodyCreateDevice.js.map