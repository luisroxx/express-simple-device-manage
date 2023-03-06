"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerTypeMapper = exports.FactoryMapper = exports.DeviceTypeMapper = exports.DeviceAttributesValueMapper = exports.DeviceAttributesMapper = exports.DeviceMapper = void 0;
class DeviceMapper {
    static toResponse(device) {
        return {
            id: device.id,
            name: device.name,
            ip: device.ip,
            factory: FactoryMapper.toResponse(device.factory),
            manufacturerType: ManufacturerTypeMapper.toResponse(device.manufacturerType),
            deviceType: DeviceTypeMapper.toResponse(device.deviceType),
            isOnline: device.isOnline,
            attributes: device.attributes.map(DeviceAttributesValueMapper.toResponse),
        };
    }
}
exports.DeviceMapper = DeviceMapper;
class DeviceAttributesMapper {
    static toResponse(attributes) {
        return {
            id: attributes.id,
            name: attributes.name,
        };
    }
}
exports.DeviceAttributesMapper = DeviceAttributesMapper;
class DeviceAttributesValueMapper {
    static toResponse(attributesValue) {
        return {
            deviceAttributeId: attributesValue.deviceAttributeId,
            value: attributesValue.value,
        };
    }
}
exports.DeviceAttributesValueMapper = DeviceAttributesValueMapper;
class DeviceTypeMapper {
    static toResponse(deviceType) {
        return {
            id: deviceType.id,
            name: deviceType.name,
            attributes: deviceType.attributes.map(DeviceAttributesMapper.toResponse),
        };
    }
}
exports.DeviceTypeMapper = DeviceTypeMapper;
class FactoryMapper {
    static toResponse(factory) {
        return {
            id: factory.id,
            name: factory.name,
        };
    }
}
exports.FactoryMapper = FactoryMapper;
class ManufacturerTypeMapper {
    static toResponse(manufacturerType) {
        return {
            id: manufacturerType.id,
            name: manufacturerType.name,
        };
    }
}
exports.ManufacturerTypeMapper = ManufacturerTypeMapper;
//# sourceMappingURL=DeviceResponseMapper.js.map