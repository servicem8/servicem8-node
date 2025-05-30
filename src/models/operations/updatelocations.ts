/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateLocationsRequest = {
  /**
   * UUID of the Location
   */
  uuid: string;
  /**
   * Location fields to update
   */
  location: components.LocationInput;
};

export type UpdateLocationsResponse = components.Result | components.ErrorT;

/** @internal */
export const UpdateLocationsRequest$inboundSchema: z.ZodType<
  UpdateLocationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  Location: components.LocationInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Location": "location",
  });
});

/** @internal */
export type UpdateLocationsRequest$Outbound = {
  uuid: string;
  Location: components.LocationInput$Outbound;
};

/** @internal */
export const UpdateLocationsRequest$outboundSchema: z.ZodType<
  UpdateLocationsRequest$Outbound,
  z.ZodTypeDef,
  UpdateLocationsRequest
> = z.object({
  uuid: z.string(),
  location: components.LocationInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    location: "Location",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLocationsRequest$ {
  /** @deprecated use `UpdateLocationsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateLocationsRequest$inboundSchema;
  /** @deprecated use `UpdateLocationsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateLocationsRequest$outboundSchema;
  /** @deprecated use `UpdateLocationsRequest$Outbound` instead. */
  export type Outbound = UpdateLocationsRequest$Outbound;
}

export function updateLocationsRequestToJSON(
  updateLocationsRequest: UpdateLocationsRequest,
): string {
  return JSON.stringify(
    UpdateLocationsRequest$outboundSchema.parse(updateLocationsRequest),
  );
}

export function updateLocationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateLocationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateLocationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateLocationsRequest' from JSON`,
  );
}

/** @internal */
export const UpdateLocationsResponse$inboundSchema: z.ZodType<
  UpdateLocationsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type UpdateLocationsResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const UpdateLocationsResponse$outboundSchema: z.ZodType<
  UpdateLocationsResponse$Outbound,
  z.ZodTypeDef,
  UpdateLocationsResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLocationsResponse$ {
  /** @deprecated use `UpdateLocationsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateLocationsResponse$inboundSchema;
  /** @deprecated use `UpdateLocationsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateLocationsResponse$outboundSchema;
  /** @deprecated use `UpdateLocationsResponse$Outbound` instead. */
  export type Outbound = UpdateLocationsResponse$Outbound;
}

export function updateLocationsResponseToJSON(
  updateLocationsResponse: UpdateLocationsResponse,
): string {
  return JSON.stringify(
    UpdateLocationsResponse$outboundSchema.parse(updateLocationsResponse),
  );
}

export function updateLocationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateLocationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateLocationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateLocationsResponse' from JSON`,
  );
}
