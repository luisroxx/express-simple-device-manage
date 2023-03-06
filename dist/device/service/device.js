"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const exception_1 = require("../exception");
const device_1 = require("../repository/device");
exports.DeviceService = {
    getDevices: () => {
        return device_1.DeviceRepository.list();
    },
    findOne: (id) => {
        const device = device_1.DeviceRepository.findOne(id);
        if (!device) {
            throw new exception_1.DeviceNotFoundException(id);
        }
        return device;
    },
    postDevice: (createDevice) => {
        const device = device_1.DeviceRepository.findOneByIpFactoryIdAndIpAddress(createDevice.factoryId, createDevice.ip);
        if (device) {
            throw new exception_1.DeviceIPAlreadyInThisFactoryException(createDevice.factoryId, createDevice.ip);
        }
        const entity = {
            name: createDevice.name,
            ip: createDevice.ip,
            factory: {
                id: createDevice.factoryId,
            },
            manufacturerType: {
                id: createDevice.manufacturerId,
            },
            deviceType: {
                id: createDevice.deviceTypeId,
            },
            isOnline: createDevice.isOnline,
            isDeleted: false,
            attributes: createDevice.attributes.map((attrib) => ({
                deviceAttributeId: attrib.deviceAttributesEntityId,
                isDeleted: false,
                value: attrib.value,
            })),
        };
        return device_1.DeviceRepository.saveOrUpdate(entity);
    },
    deleteDevice: (id) => {
        const deleted = device_1.DeviceRepository.delete(id);
        if (!deleted) {
            throw new exception_1.DeviceNotFoundException(id);
        }
    },
    putDevice: (id, updateDevice) => {
        const device = device_1.DeviceRepository.findOneByIpFactoryIdAndIpAddress(updateDevice.factoryId, updateDevice.ip);
        if (device && device.id != id) {
            throw new exception_1.DeviceIPAlreadyInThisFactoryException(updateDevice.factoryId, updateDevice.ip);
        }
        const entity = {
            id: id,
            name: updateDevice.name,
            ip: updateDevice.ip,
            factory: {
                id: updateDevice.factoryId,
            },
            manufacturerType: {
                id: updateDevice.manufacturerId,
            },
            deviceType: {
                id: updateDevice.deviceTypeId,
            },
            isOnline: updateDevice.isOnline,
            isDeleted: false,
            attributes: updateDevice.attributes.map((attrib) => ({
                deviceAttributeId: attrib.deviceAttributesEntityId,
                isDeleted: false,
                value: attrib.value,
            })),
        };
        return device_1.DeviceRepository.saveOrUpdate(entity);
    },
};
//# sourceMappingURL=device.js.map