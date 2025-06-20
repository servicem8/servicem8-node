/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetJobQueuesRequest = {
  /**
   * UUID of the Job Queue
   */
  uuid: string;
};

export type GetJobQueuesResponse = components.Queue | components.ErrorT;

/** @internal */
export const GetJobQueuesRequest$inboundSchema: z.ZodType<
  GetJobQueuesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetJobQueuesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetJobQueuesRequest$outboundSchema: z.ZodType<
  GetJobQueuesRequest$Outbound,
  z.ZodTypeDef,
  GetJobQueuesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobQueuesRequest$ {
  /** @deprecated use `GetJobQueuesRequest$inboundSchema` instead. */
  export const inboundSchema = GetJobQueuesRequest$inboundSchema;
  /** @deprecated use `GetJobQueuesRequest$outboundSchema` instead. */
  export const outboundSchema = GetJobQueuesRequest$outboundSchema;
  /** @deprecated use `GetJobQueuesRequest$Outbound` instead. */
  export type Outbound = GetJobQueuesRequest$Outbound;
}

export function getJobQueuesRequestToJSON(
  getJobQueuesRequest: GetJobQueuesRequest,
): string {
  return JSON.stringify(
    GetJobQueuesRequest$outboundSchema.parse(getJobQueuesRequest),
  );
}

export function getJobQueuesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetJobQueuesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJobQueuesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJobQueuesRequest' from JSON`,
  );
}

/** @internal */
export const GetJobQueuesResponse$inboundSchema: z.ZodType<
  GetJobQueuesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Queue$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type GetJobQueuesResponse$Outbound =
  | components.Queue$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetJobQueuesResponse$outboundSchema: z.ZodType<
  GetJobQueuesResponse$Outbound,
  z.ZodTypeDef,
  GetJobQueuesResponse
> = z.union([
  components.Queue$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobQueuesResponse$ {
  /** @deprecated use `GetJobQueuesResponse$inboundSchema` instead. */
  export const inboundSchema = GetJobQueuesResponse$inboundSchema;
  /** @deprecated use `GetJobQueuesResponse$outboundSchema` instead. */
  export const outboundSchema = GetJobQueuesResponse$outboundSchema;
  /** @deprecated use `GetJobQueuesResponse$Outbound` instead. */
  export type Outbound = GetJobQueuesResponse$Outbound;
}

export function getJobQueuesResponseToJSON(
  getJobQueuesResponse: GetJobQueuesResponse,
): string {
  return JSON.stringify(
    GetJobQueuesResponse$outboundSchema.parse(getJobQueuesResponse),
  );
}

export function getJobQueuesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetJobQueuesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJobQueuesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJobQueuesResponse' from JSON`,
  );
}
