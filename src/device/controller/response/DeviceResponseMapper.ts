import {
  DeviceAttributesResponse,
  DeviceAttributeValueResponse,
  DeviceResponse,
  DeviceTypeResponse,
  FactoryResponse,
  ManufacturerTypeResponse,
} from "./DeviceResponse";

import {
  DeviceAttributesEntity,
  DeviceAttributeValueEntity,
  DeviceEntity,
  DeviceTypeEntity,
  FactoryEntity,
  ManufacturerType,
} from "../../entity/";

export class DeviceMapper {
  static toResponse(device: DeviceEntity): DeviceResponse {
    const values = device.attributes.map((attribValue) => ({
      attributesValue: attribValue,
      attribute: device.deviceType.attributes.find(
        (deviceAttrib) => deviceAttrib.id == attribValue.deviceAttributeId
      ),
    }));

    return {
      id: device.id,
      name: device.name,
      ip: device.ip,
      factory: FactoryMapper.toResponse(device.factory),
      manufacturerType: ManufacturerTypeMapper.toResponse(
        device.manufacturerType
      ),
      deviceType: DeviceTypeMapper.toResponse(device.deviceType),
      isOnline: device.isOnline,
      attributes: values.map((attribs) =>
        DeviceAttributesValueMapper.toResponse({
          attribute: attribs.attribute,
          attributesValue: attribs.attributesValue,
        })
      ),
    } as DeviceResponse;
  }
}

export class DeviceAttributesMapper {
  static toResponse(
    attributes: DeviceAttributesEntity
  ): DeviceAttributesResponse {
    return {
      id: attributes.id,
      name: attributes.name,
    };
  }
}

export class DeviceAttributesValueMapper {
  static toResponse(a: {
    attributesValue: DeviceAttributeValueEntity;
    attribute: DeviceAttributesEntity;
  }): DeviceAttributeValueResponse {
    return {
      deviceAttributeId: a.attributesValue.deviceAttributeId,
      value: a.attributesValue.value,
      name: a.attribute.name,
    };
  }
}

export class DeviceTypeMapper {
  static toResponse(deviceType: DeviceTypeEntity): DeviceTypeResponse {
    return {
      id: deviceType.id,
      name: deviceType.name,
    };
  }
}

export class FactoryMapper {
  static toResponse(factory: FactoryEntity): FactoryResponse {
    return {
      id: factory.id,
      name: factory.name,
    };
  }
}

export class ManufacturerTypeMapper {
  static toResponse(
    manufacturerType: ManufacturerType
  ): ManufacturerTypeResponse {
    return {
      id: manufacturerType.id,
      name: manufacturerType.name,
    };
  }
}
