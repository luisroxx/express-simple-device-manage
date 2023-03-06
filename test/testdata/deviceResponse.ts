import { DeviceResponse } from "../../src/device/controller/response/DeviceResponse";

export const printer1: DeviceResponse = {
  id: 1,
  name: "Printer 1",
  ip: "192.168.3.5",
  factory: {
    id: 1,
    name: "Burlington",
  },
  manufacturerType: {
    id: 1,
    name: "Vida",
  },
  deviceType: {
    id: 1,
    name: "3D Printer",
    attributes: [],
  },
  isOnline: true,
  attributes: [],
};

export const printer2: DeviceResponse = {
  id: 2,
  name: "Printer 2",
  ip: "192.168.3.6",
  factory: {
    id: 1,
    name: "Burlington",
  },
  manufacturerType: {
    id: 1,
    name: "Vida",
  },
  deviceType: {
    id: 1,
    name: "3D Printer",
    attributes: [],
  },
  isOnline: true,
  attributes: [],
};

export const furnace1: DeviceResponse = {
  id: 3,
  name: "Furn 1",
  ip: "192.168.3.8",
  factory: {
    id: 1,
    name: "Burlington",
  },
  manufacturerType: {
    id: 2,
    name: "Combi",
  },
  deviceType: {
    id: 2,
    name: "Furnace",
    attributes: [
      {
        id: 1,
        name: "Max Temp",
      },
    ],
  },
  isOnline: true,
  attributes: [
    {
      deviceAttributeId: 1,
      value: "1000C",
    },
  ],
};

export const qualityCheck1: DeviceResponse = {
  id: 4,
  name: "QC 1",
  ip: "192.168.3.9",
  factory: {
    id: 1,
    name: "Burlington",
  },
  manufacturerType: {
    id: 3,
    name: "Rapid",
  },
  deviceType: {
    id: 3,
    name: "Quality Check Device",
    attributes: [
      {
        id: 2,
        name: "Capacity",
      },
    ],
  },
  isOnline: true,
  attributes: [
    {
      deviceAttributeId: 2,
      value: "2 trays",
    },
  ],
};

export const printer1W: DeviceResponse = {
  id: 5,
  name: "Printer 1",
  ip: "192.168.3.5",
  factory: {
    id: 2,
    name: "Wilmington",
  },
  manufacturerType: {
    id: 1,
    name: "Vida",
  },
  deviceType: {
    id: 1,
    name: "3D Printer",
    attributes: [],
  },
  isOnline: true,
  attributes: [],
};
