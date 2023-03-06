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
      attributes: device.attributes.map(DeviceAttributesValueMapper.toResponse),
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
  static toResponse(
    attributesValue: DeviceAttributeValueEntity
  ): DeviceAttributeValueResponse {
    return {
      deviceAttributeId: attributesValue.deviceAttributeId,
      value: attributesValue.value,
    };
  }
}

export class DeviceTypeMapper {
  static toResponse(deviceType: DeviceTypeEntity): DeviceTypeResponse {
    return {
      id: deviceType.id,
      name: deviceType.name,
      attributes: deviceType.attributes.map(DeviceAttributesMapper.toResponse),
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
