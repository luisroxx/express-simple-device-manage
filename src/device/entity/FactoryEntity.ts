import { Entity } from "../../core/entity/entity";
import { DeviceEntity } from "./DeviceEntity";

export class FactoryEntity extends Entity {
  name: string;
  devices: DeviceEntity[];
}
