/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLocationsRequest = {
  /**
   * UUID of the Location
   */
  uuid: string;
};

export type GetLocationsResponse = components.Location | components.ErrorT;

/** @internal */
export const GetLocationsRequest$inboundSchema: z.ZodType<
  GetLocationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetLocationsRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetLocationsRequest$outboundSchema: z.ZodType<
  GetLocationsRequest$Outbound,
  z.ZodTypeDef,
  GetLocationsRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLocationsRequest$ {
  /** @deprecated use `GetLocationsRequest$inboundSchema` instead. */
  export const inboundSchema = GetLocationsRequest$inboundSchema;
  /** @deprecated use `GetLocationsRequest$outboundSchema` instead. */
  export const outboundSchema = GetLocationsRequest$outboundSchema;
  /** @deprecated use `GetLocationsRequest$Outbound` instead. */
  export type Outbound = GetLocationsRequest$Outbound;
}

export function getLocationsRequestToJSON(
  getLocationsRequest: GetLocationsRequest,
): string {
  return JSON.stringify(
    GetLocationsRequest$outboundSchema.parse(getLocationsRequest),
  );
}

export function getLocationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLocationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLocationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLocationsRequest' from JSON`,
  );
}

/** @internal */
export const GetLocationsResponse$inboundSchema: z.ZodType<
  GetLocationsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.Location$inboundSchema,
  components.ErrorT$inboundSchema,
]);

/** @internal */
export type GetLocationsResponse$Outbound =
  | components.Location$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetLocationsResponse$outboundSchema: z.ZodType<
  GetLocationsResponse$Outbound,
  z.ZodTypeDef,
  GetLocationsResponse
> = z.union([
  components.Location$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLocationsResponse$ {
  /** @deprecated use `GetLocationsResponse$inboundSchema` instead. */
  export const inboundSchema = GetLocationsResponse$inboundSchema;
  /** @deprecated use `GetLocationsResponse$outboundSchema` instead. */
  export const outboundSchema = GetLocationsResponse$outboundSchema;
  /** @deprecated use `GetLocationsResponse$Outbound` instead. */
  export type Outbound = GetLocationsResponse$Outbound;
}

export function getLocationsResponseToJSON(
  getLocationsResponse: GetLocationsResponse,
): string {
  return JSON.stringify(
    GetLocationsResponse$outboundSchema.parse(getLocationsResponse),
  );
}

export function getLocationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetLocationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLocationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLocationsResponse' from JSON`,
  );
}
