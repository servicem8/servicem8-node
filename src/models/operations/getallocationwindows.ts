/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAllocationWindowsRequest = {
  /**
   * UUID of the Allocation Window
   */
  uuid: string;
};

export type GetAllocationWindowsResponse =
  | components.AllocationWindow
  | components.ErrorT;

/** @internal */
export const GetAllocationWindowsRequest$inboundSchema: z.ZodType<
  GetAllocationWindowsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetAllocationWindowsRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetAllocationWindowsRequest$outboundSchema: z.ZodType<
  GetAllocationWindowsRequest$Outbound,
  z.ZodTypeDef,
  GetAllocationWindowsRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllocationWindowsRequest$ {
  /** @deprecated use `GetAllocationWindowsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllocationWindowsRequest$inboundSchema;
  /** @deprecated use `GetAllocationWindowsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllocationWindowsRequest$outboundSchema;
  /** @deprecated use `GetAllocationWindowsRequest$Outbound` instead. */
  export type Outbound = GetAllocationWindowsRequest$Outbound;
}

export function getAllocationWindowsRequestToJSON(
  getAllocationWindowsRequest: GetAllocationWindowsRequest,
): string {
  return JSON.stringify(
    GetAllocationWindowsRequest$outboundSchema.parse(
      getAllocationWindowsRequest,
    ),
  );
}

export function getAllocationWindowsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllocationWindowsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllocationWindowsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllocationWindowsRequest' from JSON`,
  );
}

/** @internal */
export const GetAllocationWindowsResponse$inboundSchema: z.ZodType<
  GetAllocationWindowsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AllocationWindow$inboundSchema,
  components.ErrorT$inboundSchema,
]);

/** @internal */
export type GetAllocationWindowsResponse$Outbound =
  | components.AllocationWindow$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetAllocationWindowsResponse$outboundSchema: z.ZodType<
  GetAllocationWindowsResponse$Outbound,
  z.ZodTypeDef,
  GetAllocationWindowsResponse
> = z.union([
  components.AllocationWindow$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllocationWindowsResponse$ {
  /** @deprecated use `GetAllocationWindowsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllocationWindowsResponse$inboundSchema;
  /** @deprecated use `GetAllocationWindowsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllocationWindowsResponse$outboundSchema;
  /** @deprecated use `GetAllocationWindowsResponse$Outbound` instead. */
  export type Outbound = GetAllocationWindowsResponse$Outbound;
}

export function getAllocationWindowsResponseToJSON(
  getAllocationWindowsResponse: GetAllocationWindowsResponse,
): string {
  return JSON.stringify(
    GetAllocationWindowsResponse$outboundSchema.parse(
      getAllocationWindowsResponse,
    ),
  );
}

export function getAllocationWindowsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllocationWindowsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllocationWindowsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllocationWindowsResponse' from JSON`,
  );
}
