import { RequestBodyCreateDevice } from "../controller/request/RequestBodyCreateDevice";
import { DeviceEntity, DeviceTypeEntity, FactoryEntity } from "../entity";
import { DeviceAttributeValueEntity } from "../entity/DeviceAttributeValueEntity";
import { ManufacturerType } from "../entity/ManufacturerType";
import {
  DeviceIPAlreadyInThisFactoryException,
  DeviceNotFoundException,
} from "../exception";
import { DeviceRepository } from "../repository/device";

export const DeviceService = {
  getDevices: (): DeviceEntity[] => {
    return DeviceRepository.list();
  },

  findOne: (id: number): DeviceEntity => {
    const device = DeviceRepository.findOne(id);
    if (!device) {
      throw new DeviceNotFoundException(id);
    }

    return device;
  },

  postDevice: (createDevice: RequestBodyCreateDevice): DeviceEntity => {
    const device = DeviceRepository.findOneByIpFactoryIdAndIpAddress(
      createDevice.factoryId,
      createDevice.ip
    );

    if (device) {
      throw new DeviceIPAlreadyInThisFactoryException(
        createDevice.factoryId,
        createDevice.ip
      );
    }
    const entity: Partial<DeviceEntity> = {
      name: createDevice.name,
      ip: createDevice.ip,
      factory: {
        id: createDevice.factoryId,
      } as FactoryEntity,
      manufacturerType: {
        id: createDevice.manufacturerId,
      } as ManufacturerType,
      deviceType: {
        id: createDevice.deviceTypeId,
      } as DeviceTypeEntity,
      isOnline: createDevice.isOnline,
      isDeleted: false,
      attributes: createDevice.attributes.map(
        (attrib) =>
          ({
            deviceAttributeId: attrib.deviceAttributesEntityId,
            isDeleted: false,
            value: attrib.value,
          } as DeviceAttributeValueEntity)
      ),
    };

    return DeviceRepository.saveOrUpdate(entity);
  },

  deleteDevice: (id: number): void => {
    const deleted = DeviceRepository.delete(id);
    if (!deleted) {
      throw new DeviceNotFoundException(id);
    }
  },

  putDevice: (
    id: number,
    updateDevice: RequestBodyCreateDevice
  ): DeviceEntity => {
    const device = DeviceRepository.findOneByIpFactoryIdAndIpAddress(
      updateDevice.factoryId,
      updateDevice.ip
    );

    if (device && device.id != id) {
      throw new DeviceIPAlreadyInThisFactoryException(
        updateDevice.factoryId,
        updateDevice.ip
      );
    }

    const entity: DeviceEntity = {
      id: id,
      name: updateDevice.name,
      ip: updateDevice.ip,
      factory: {
        id: updateDevice.factoryId,
      } as FactoryEntity,
      manufacturerType: {
        id: updateDevice.manufacturerId,
      } as ManufacturerType,
      deviceType: {
        id: updateDevice.deviceTypeId,
      } as DeviceTypeEntity,
      isOnline: updateDevice.isOnline,
      isDeleted: false,
      attributes: updateDevice.attributes.map(
        (attrib) =>
          ({
            deviceAttributeId: attrib.deviceAttributesEntityId,
            isDeleted: false,
            value: attrib.value,
          } as DeviceAttributeValueEntity)
      ),
    };

    return DeviceRepository.saveOrUpdate(entity);
  },
};
