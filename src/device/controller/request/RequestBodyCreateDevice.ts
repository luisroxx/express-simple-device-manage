import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsInt,
  IsIP,
  IsNotEmpty,
  ValidateNested,
} from "class-validator";

export class RequestBodyCreateDevice {
  @IsNotEmpty()
  name: string;

  @IsIP("4")
  ip: string;

  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsInt()
  factoryId: number;

  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsInt()
  manufacturerId: number;

  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsInt()
  deviceTypeId: number;

  @Transform(({ value }) => Boolean(value), { toClassOnly: true })
  @IsBoolean()
  isOnline: boolean;

  @ValidateNested({ each: true })
  attributes: RequestBodyAttributes[];
}

export class RequestBodyAttributes {
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsInt()
  deviceAttributesEntityId: number;

  @IsNotEmpty()
  value: string;
}
