"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerTypeMapper = exports.FactoryMapper = exports.DeviceTypeMapper = exports.DeviceAttributesValueMapper = exports.DeviceAttributesMapper = exports.DeviceMapper = void 0;
class DeviceMapper {
    static toResponse(device) {
        const values = device.attributes.map((attribValue) => ({
            attributesValue: attribValue,
            attribute: device.deviceType.attributes.find((deviceAttrib) => deviceAttrib.id == attribValue.deviceAttributeId),
        }));
        return {
            id: device.id,
            name: device.name,
            ip: device.ip,
            factory: FactoryMapper.toResponse(device.factory),
            manufacturerType: ManufacturerTypeMapper.toResponse(device.manufacturerType),
            deviceType: DeviceTypeMapper.toResponse(device.deviceType),
            isOnline: device.isOnline,
            attributes: values.map((attribs) => DeviceAttributesValueMapper.toResponse({
                attribute: attribs.attribute,
                attributesValue: attribs.attributesValue,
            })),
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
    static toResponse(a) {
        return {
            deviceAttributeId: a.attributesValue.deviceAttributeId,
            value: a.attributesValue.value,
            name: a.attribute.name,
        };
    }
}
exports.DeviceAttributesValueMapper = DeviceAttributesValueMapper;
class DeviceTypeMapper {
    static toResponse(deviceType) {
        return {
            id: deviceType.id,
            name: deviceType.name,
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