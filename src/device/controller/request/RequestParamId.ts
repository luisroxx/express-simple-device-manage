import { Transform } from "class-transformer";
import { IsInt } from "class-validator";

export class RequestParamId {
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsInt()
  id: number;
}
