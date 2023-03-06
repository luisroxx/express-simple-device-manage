import { Entity } from "../../core/entity/entity";
import { DeviceAttributesEntity } from "./DeviceAttributesEntity";

export class DeviceTypeEntity extends Entity {
  name: string;
  attributes: DeviceAttributesEntity[];
}
