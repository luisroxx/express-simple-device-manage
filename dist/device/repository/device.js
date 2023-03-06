"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRepository = exports.factories = void 0;
const exception_1 = require("./exception");
exports.factories = new Map();
const getFactories = () => {
    return Array.from(exports.factories.values()).filter((factory) => !factory.isDeleted);
};
const getDevices = () => {
    return getFactories()
        .map((factory) => factory.devices)
        .reduce((acc, val) => acc.concat(val), [])
        .filter((device) => !device.isDeleted);
};
const getManufacturersTypes = () => {
    return getDevices().map((device) => device.manufacturerType);
};
const getdeviceType = () => {
    return getDevices().map((device) => device.deviceType);
};
const generateId = () => {
    return (Array.from(exports.factories.values())
        .map((factory) => factory.devices)
        .reduce((acc, val) => acc.concat(val), [])
        .reduce((a, device) => Math.max(a, device.id), -Infinity) + 1);
};
const getSaveOrUpdateBaseEntity = (deviceId) => {
    if (deviceId) {
        const device = getDevices().find((device) => device.id == deviceId && !device.isDeleted);
        if (!device) {
            throw new exception_1.DeviceNotInDBException(deviceId);
        }
        return device;
    }
    return {
        id: generateId(),
        isDeleted: false,
    };
};
exports.DeviceRepository = {
    list: () => {
        return getDevices();
    },
    findOne: (id) => {
        return getDevices().find((device) => device.id == id && !device.isDeleted);
    },
    findOneByIpFactoryIdAndIpAddress: (factoryId, ipAddress) => {
        const factory = exports.factories.get(factoryId);
        if (!factory) {
            throw new exception_1.FactoryNotInDBException(factoryId);
        }
        return factory.devices.find((device) => device.ip == ipAddress && !device.isDeleted);
    },
    saveOrUpdate: (entity) => {
        const factory = getFactories().find((factory) => factory.id == entity.factory.id);
        if (!factory) {
            throw new exception_1.FactoryNotInDBException(entity.factory.id);
        }
        const manufacturerType = getManufacturersTypes().find((manufacturer) => manufacturer.id == entity.manufacturerType.id);
        if (!manufacturerType) {
            throw new exception_1.ManufacturerNotInDBException(entity.manufacturerType.id);
        }
        const deviceType = getdeviceType().find((device) => device.id == entity.deviceType.id);
        if (!deviceType) {
            throw new exception_1.DeviceTypeNotInDBException(entity.deviceType.id);
        }
        const missingAttributes = deviceType.attributes.filter((attribute) => !entity.attributes.some((entityAtribute) => entityAtribute.deviceAttributeId == attribute.id));
        if (missingAttributes.length) {
            throw new exception_1.MissingDeviceAttributesDBException(missingAttributes.map((attrib) => attrib.id));
        }
        let persistedEntity = getSaveOrUpdateBaseEntity(entity.id);
        persistedEntity = Object.assign(Object.assign({}, persistedEntity), {
            name: entity.name,
            ip: entity.ip,
            factory: {
                id: factory.id,
                name: factory.name,
            },
            manufacturerType: manufacturerType,
            deviceType: deviceType,
            isOnline: entity.isOnline,
            attributes: entity.attributes,
        });
        factory.devices.push(persistedEntity);
        return persistedEntity;
    },
    delete: (id) => {
        const device = getDevices().find((device) => device.id == id && !device.isDeleted);
        if (!device) {
            return false;
        }
        device.isDeleted = true;
        return true;
    },
    clear: () => {
        exports.factories.clear();
    },
};
//# sourceMappingURL=device.js.map