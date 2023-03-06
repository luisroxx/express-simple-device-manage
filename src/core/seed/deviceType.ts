import { DeviceTypeEntity } from "../../../src/device/entity/DeviceTypeEntity";
import {
  deviceAttributesCapacity,
  deviceAttributesMaxTemperature,
} from "./deviceAttributesEntity";

export const deviceType3DPrinter: DeviceTypeEntity = {
  id: 1,
  name: "3D Printer",
  isDeleted: false,
  attributes: [],
};

export const deviceTypeFurnace: DeviceTypeEntity = {
  id: 2,
  name: "Furnace",
  isDeleted: false,
  attributes: [deviceAttributesMaxTemperature],
};

export const deviceTypeQualityCheck: DeviceTypeEntity = {
  id: 3,
  name: "Quality Check Device",
  isDeleted: false,
  attributes: [deviceAttributesCapacity],
};
