/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetJobChecklistsRequest = {
  /**
   * UUID of the Job Checklist
   */
  uuid: string;
};

export type GetJobChecklistsResponse =
  | components.JobChecklist
  | components.ErrorT;

/** @internal */
export const GetJobChecklistsRequest$inboundSchema: z.ZodType<
  GetJobChecklistsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetJobChecklistsRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetJobChecklistsRequest$outboundSchema: z.ZodType<
  GetJobChecklistsRequest$Outbound,
  z.ZodTypeDef,
  GetJobChecklistsRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobChecklistsRequest$ {
  /** @deprecated use `GetJobChecklistsRequest$inboundSchema` instead. */
  export const inboundSchema = GetJobChecklistsRequest$inboundSchema;
  /** @deprecated use `GetJobChecklistsRequest$outboundSchema` instead. */
  export const outboundSchema = GetJobChecklistsRequest$outboundSchema;
  /** @deprecated use `GetJobChecklistsRequest$Outbound` instead. */
  export type Outbound = GetJobChecklistsRequest$Outbound;
}

export function getJobChecklistsRequestToJSON(
  getJobChecklistsRequest: GetJobChecklistsRequest,
): string {
  return JSON.stringify(
    GetJobChecklistsRequest$outboundSchema.parse(getJobChecklistsRequest),
  );
}

export function getJobChecklistsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetJobChecklistsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJobChecklistsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJobChecklistsRequest' from JSON`,
  );
}

/** @internal */
export const GetJobChecklistsResponse$inboundSchema: z.ZodType<
  GetJobChecklistsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.JobChecklist$inboundSchema,
  components.ErrorT$inboundSchema,
]);

/** @internal */
export type GetJobChecklistsResponse$Outbound =
  | components.JobChecklist$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetJobChecklistsResponse$outboundSchema: z.ZodType<
  GetJobChecklistsResponse$Outbound,
  z.ZodTypeDef,
  GetJobChecklistsResponse
> = z.union([
  components.JobChecklist$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobChecklistsResponse$ {
  /** @deprecated use `GetJobChecklistsResponse$inboundSchema` instead. */
  export const inboundSchema = GetJobChecklistsResponse$inboundSchema;
  /** @deprecated use `GetJobChecklistsResponse$outboundSchema` instead. */
  export const outboundSchema = GetJobChecklistsResponse$outboundSchema;
  /** @deprecated use `GetJobChecklistsResponse$Outbound` instead. */
  export type Outbound = GetJobChecklistsResponse$Outbound;
}

export function getJobChecklistsResponseToJSON(
  getJobChecklistsResponse: GetJobChecklistsResponse,
): string {
  return JSON.stringify(
    GetJobChecklistsResponse$outboundSchema.parse(getJobChecklistsResponse),
  );
}

export function getJobChecklistsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetJobChecklistsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJobChecklistsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJobChecklistsResponse' from JSON`,
  );
}
