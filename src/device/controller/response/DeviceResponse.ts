export interface DeviceResponse {
  id: number;
  name: string;
  ip: string;
  factory: FactoryResponse;
  manufacturerType: ManufacturerTypeResponse;
  deviceType: DeviceTypeResponse;
  isOnline: boolean;
  attributes: DeviceAttributeValueResponse[];
}

export interface DeviceAttributesResponse {
  id: number;
  name: string;
}

export interface DeviceTypeResponse {
  id: number;
  name: string;
}

export interface FactoryResponse {
  id: number;
  name: string;
}

export interface ManufacturerTypeResponse {
  id: number;
  name: string;
}

export class DeviceAttributeValueResponse {
  deviceAttributeId: number;
  name: string;
  value: string;
}
