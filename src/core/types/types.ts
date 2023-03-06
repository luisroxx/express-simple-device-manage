import { Request as ExpressRequest } from "express";
import { ParamsDictionary } from "express-serve-static-core";

interface ParsedQs {
  [key: string]: string | string[] | undefined;
}

export interface RequestBody<T = Record<string, any>> extends ExpressRequest {
  body: T;
}

export interface RequestBodyParams<
  T = Record<string, any>,
  U = Record<string, any>
> extends ExpressRequest {
  body: T;
  params: ParamsDictionary & U;
}

export interface RequestBodyParamsQuery<
  T = Record<string, any>,
  U = Record<string, any>,
  X = Record<string, any>
> extends ExpressRequest {
  body: T;
  params: ParamsDictionary & U;
  query: ParsedQs & X;
}

export interface RequestParams<T = Record<string, any>> extends ExpressRequest {
  params: ParamsDictionary & T;
}

export interface RequestParamsQuery<
  T = Record<string, any>,
  U = Record<string, any>
> extends ExpressRequest {
  params: ParamsDictionary & T;
  query: ParsedQs & U;
}

export interface RequestQuery<T = Record<string, any>> extends ExpressRequest {
  query: ParsedQs & T;
}
