import { DeviceEntity } from "../../device/entity/DeviceEntity";
import {
  deviceAttributesValueCapacity,
  deviceAttributesValueMaxTemperature,
} from "./deviceAttributesValueEntity";
import {
  deviceType3DPrinter,
  deviceTypeFurnace,
  deviceTypeQualityCheck,
} from "./deviceType";
import { factoryBurlingon, factoryWilmington } from "./factory";
import {
  manufacturerCombi,
  manufacturerRapid,
  manufacturerVida,
} from "./manufacturerType";

export const devicePrinter1 = (): DeviceEntity => {
  return {
    id: 1,
    name: "Printer 1",
    ip: "192.168.3.5",
    factory: factoryBurlingon(false),
    manufacturerType: manufacturerVida,
    deviceType: deviceType3DPrinter,
    isDeleted: false,
    isOnline: true,
    attributes: [],
  };
};

export const devicePrinter2 = (): DeviceEntity => {
  return {
    id: 2,
    name: "Printer 2",
    ip: "192.168.3.6",
    factory: factoryBurlingon(false),
    manufacturerType: manufacturerVida,
    deviceType: deviceType3DPrinter,
    isDeleted: false,
    isOnline: true,
    attributes: [],
  };
};

export const deviceFurnace = (): DeviceEntity => {
  return {
    id: 3,
    name: "Furn 1",
    ip: "192.168.3.8",
    factory: factoryBurlingon(false),
    manufacturerType: manufacturerCombi,
    deviceType: deviceTypeFurnace,
    isDeleted: false,
    isOnline: true,
    attributes: [deviceAttributesValueMaxTemperature],
  };
};

export const deviceQualityCheck = (): DeviceEntity => {
  return {
    id: 4,
    name: "QC 1",
    ip: "192.168.3.9",
    factory: factoryBurlingon(false),
    manufacturerType: manufacturerRapid,
    deviceType: deviceTypeQualityCheck,
    isDeleted: false,
    isOnline: true,
    attributes: [deviceAttributesValueCapacity],
  };
};

export const devicePrinter3 = (): DeviceEntity => {
  return {
    id: 5,
    name: "Printer 1",
    ip: "192.168.3.5",
    factory: factoryWilmington(false),
    manufacturerType: manufacturerVida,
    deviceType: deviceType3DPrinter,
    isDeleted: false,
    isOnline: true,
    attributes: [],
  };
};
