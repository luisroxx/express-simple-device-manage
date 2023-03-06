"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devicePrinter3 = exports.deviceQualityCheck = exports.deviceFurnace = exports.devicePrinter2 = exports.devicePrinter1 = void 0;
const deviceAttributesValueEntity_1 = require("./deviceAttributesValueEntity");
const deviceType_1 = require("./deviceType");
const factory_1 = require("./factory");
const manufacturerType_1 = require("./manufacturerType");
const devicePrinter1 = () => {
    return {
        id: 1,
        name: "Printer 1",
        ip: "192.168.3.5",
        factory: (0, factory_1.factoryBurlingon)(false),
        manufacturerType: manufacturerType_1.manufacturerVida,
        deviceType: deviceType_1.deviceType3DPrinter,
        isDeleted: false,
        isOnline: true,
        attributes: [],
    };
};
exports.devicePrinter1 = devicePrinter1;
const devicePrinter2 = () => {
    return {
        id: 2,
        name: "Printer 2",
        ip: "192.168.3.6",
        factory: (0, factory_1.factoryBurlingon)(false),
        manufacturerType: manufacturerType_1.manufacturerVida,
        deviceType: deviceType_1.deviceType3DPrinter,
        isDeleted: false,
        isOnline: true,
        attributes: [],
    };
};
exports.devicePrinter2 = devicePrinter2;
const deviceFurnace = () => {
    return {
        id: 3,
        name: "Furn 1",
        ip: "192.168.3.8",
        factory: (0, factory_1.factoryBurlingon)(false),
        manufacturerType: manufacturerType_1.manufacturerCombi,
        deviceType: deviceType_1.deviceTypeFurnace,
        isDeleted: false,
        isOnline: true,
        attributes: [deviceAttributesValueEntity_1.deviceAttributesValueMaxTemperature],
    };
};
exports.deviceFurnace = deviceFurnace;
const deviceQualityCheck = () => {
    return {
        id: 4,
        name: "QC 1",
        ip: "192.168.3.9",
        factory: (0, factory_1.factoryBurlingon)(false),
        manufacturerType: manufacturerType_1.manufacturerRapid,
        deviceType: deviceType_1.deviceTypeQualityCheck,
        isDeleted: false,
        isOnline: true,
        attributes: [deviceAttributesValueEntity_1.deviceAttributesValueCapacity],
    };
};
exports.deviceQualityCheck = deviceQualityCheck;
const devicePrinter3 = () => {
    return {
        id: 5,
        name: "Printer 1",
        ip: "192.168.3.5",
        factory: (0, factory_1.factoryWilmington)(false),
        manufacturerType: manufacturerType_1.manufacturerVida,
        deviceType: deviceType_1.deviceType3DPrinter,
        isDeleted: false,
        isOnline: true,
        attributes: [],
    };
};
exports.devicePrinter3 = devicePrinter3;
//# sourceMappingURL=device.js.map