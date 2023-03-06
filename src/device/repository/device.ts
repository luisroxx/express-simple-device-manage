import { DeviceEntity, DeviceTypeEntity, FactoryEntity } from "../entity";
import { ManufacturerType } from "../entity/ManufacturerType";
import {
  DeviceNotInDBException,
  DeviceTypeNotInDBException,
  FactoryNotInDBException,
  ManufacturerNotInDBException,
  MissingDeviceAttributesDBException,
} from "./exception";

export const factories = new Map<number, FactoryEntity>();

const getFactories = (): FactoryEntity[] => {
  return Array.from(factories.values()).filter((factory) => !factory.isDeleted);
};

const getDevices = (): DeviceEntity[] => {
  return getFactories()
    .map((factory) => factory.devices)
    .reduce((acc, val) => acc.concat(val), [])
    .filter((device) => !device.isDeleted);
};

const getManufacturersTypes = (): ManufacturerType[] => {
  return getDevices().map((device) => device.manufacturerType);
};

const getdeviceType = (): DeviceTypeEntity[] => {
  return getDevices().map((device) => device.deviceType);
};

const generateId = (): number => {
  return (
    Array.from(factories.values())
      .map((factory) => factory.devices)
      .reduce((acc, val) => acc.concat(val), [])
      .reduce((a, device) => Math.max(a, device.id), -Infinity) + 1
  );
};

const getSaveOrUpdateBaseEntity = (
  deviceId: number | undefined
): DeviceEntity => {
  if (deviceId) {
    const device = getDevices().find(
      (device) => device.id == deviceId && !device.isDeleted
    );
    if (!device) {
      throw new DeviceNotInDBException(deviceId);
    }

    return device;
  }

  return {
    id: generateId(),
    isDeleted: false,
  } as DeviceEntity;
};

export const DeviceRepository = {
  list: (): DeviceEntity[] => {
    return getDevices();
  },

  findOne: (id: number): DeviceEntity => {
    return getDevices().find((device) => device.id == id && !device.isDeleted);
  },

  findOneByIpFactoryIdAndIpAddress: (
    factoryId: number,
    ipAddress: string
  ): DeviceEntity | undefined => {
    const factory = factories.get(factoryId);
    if (!factory) {
      throw new FactoryNotInDBException(factoryId);
    }

    return factory.devices.find(
      (device) => device.ip == ipAddress && !device.isDeleted
    );
  },

  saveOrUpdate: (entity: Partial<DeviceEntity>): DeviceEntity => {
    const factory = getFactories().find(
      (factory) => factory.id == entity.factory.id
    );
    if (!factory) {
      throw new FactoryNotInDBException(entity.factory.id);
    }

    const manufacturerType = getManufacturersTypes().find(
      (manufacturer) => manufacturer.id == entity.manufacturerType.id
    );
    if (!manufacturerType) {
      throw new ManufacturerNotInDBException(entity.manufacturerType.id);
    }

    const deviceType = getdeviceType().find(
      (device) => device.id == entity.deviceType.id
    );

    if (!deviceType) {
      throw new DeviceTypeNotInDBException(entity.deviceType.id);
    }

    const missingAttributes = deviceType.attributes.filter(
      (attribute) =>
        !entity.attributes.some(
          (entityAtribute) => entityAtribute.deviceAttributeId == attribute.id
        )
    );

    if (missingAttributes.length) {
      throw new MissingDeviceAttributesDBException(
        missingAttributes.map((attrib) => attrib.id)
      );
    }

    let persistedEntity = getSaveOrUpdateBaseEntity(entity.id);
    persistedEntity = {
      ...persistedEntity,
      ...{
        name: entity.name,
        ip: entity.ip,
        factory: {
          id: factory.id,
          name: factory.name,
        } as FactoryEntity,
        manufacturerType: manufacturerType,
        deviceType: deviceType,
        isOnline: entity.isOnline,
        attributes: entity.attributes,
      },
    };

    factory.devices.push(persistedEntity);

    return persistedEntity;
  },

  delete: (id: number): boolean => {
    const device = getDevices().find(
      (device) => device.id == id && !device.isDeleted
    );
    if (!device) {
      return false;
    }

    device.isDeleted = true;

    return true;
  },

  clear: (): void => {
    factories.clear();
  },
};
