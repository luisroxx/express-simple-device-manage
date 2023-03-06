"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceTypeQualityCheck = exports.deviceTypeFurnace = exports.deviceType3DPrinter = void 0;
const deviceAttributesEntity_1 = require("./deviceAttributesEntity");
exports.deviceType3DPrinter = {
    id: 1,
    name: "3D Printer",
    isDeleted: false,
    attributes: [],
};
exports.deviceTypeFurnace = {
    id: 2,
    name: "Furnace",
    isDeleted: false,
    attributes: [deviceAttributesEntity_1.deviceAttributesMaxTemperature],
};
exports.deviceTypeQualityCheck = {
    id: 3,
    name: "Quality Check Device",
    isDeleted: false,
    attributes: [deviceAttributesEntity_1.deviceAttributesCapacity],
};
//# sourceMappingURL=deviceType.js.map