import { FactoryEntity } from "../../../src/device/entity/FactoryEntity";
import {
  deviceFurnace,
  devicePrinter1,
  devicePrinter2,
  devicePrinter3,
  deviceQualityCheck,
} from "./device";

export const factoryBurlingon = (withDevices = true): FactoryEntity => {
  return {
    id: 1,
    name: "Burlington",
    isDeleted: false,
    devices: withDevices
      ? [
          devicePrinter1(),
          devicePrinter2(),
          deviceFurnace(),
          deviceQualityCheck(),
        ]
      : [],
  };
};

export const factoryWilmington = (withDevices = true): FactoryEntity => {
  return {
    id: 2,
    name: "Wilmington",
    isDeleted: false,
    devices: withDevices ? [devicePrinter3()] : [],
  };
};
