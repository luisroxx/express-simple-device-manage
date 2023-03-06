"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryWilmington = exports.factoryBurlingon = void 0;
const device_1 = require("./device");
const factoryBurlingon = (withDevices = true) => {
    return {
        id: 1,
        name: "Burlington",
        isDeleted: false,
        devices: withDevices
            ? [
                (0, device_1.devicePrinter1)(),
                (0, device_1.devicePrinter2)(),
                (0, device_1.deviceFurnace)(),
                (0, device_1.deviceQualityCheck)(),
            ]
            : [],
    };
};
exports.factoryBurlingon = factoryBurlingon;
const factoryWilmington = (withDevices = true) => {
    return {
        id: 2,
        name: "Wilmington",
        isDeleted: false,
        devices: withDevices ? [(0, device_1.devicePrinter3)()] : [],
    };
};
exports.factoryWilmington = factoryWilmington;
//# sourceMappingURL=factory.js.map