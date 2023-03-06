import { Entity } from "../../core/entity/entity";
import { DeviceAttributeValueEntity } from "./DeviceAttributeValueEntity";
import { DeviceTypeEntity } from "./DeviceTypeEntity";
import { FactoryEntity } from "./FactoryEntity";
import { ManufacturerType } from "./ManufacturerType";

export class DeviceEntity extends Entity {
  name: string;
  ip: string;
  factory: FactoryEntity;
  manufacturerType: ManufacturerType;
  deviceType: DeviceTypeEntity;
  isOnline: boolean;
  attributes: DeviceAttributeValueEntity[];
}
