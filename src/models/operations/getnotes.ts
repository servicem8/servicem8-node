/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetNotesRequest = {
  /**
   * UUID of the Note
   */
  uuid: string;
};

export type GetNotesResponse = components.Note | components.ErrorT;

/** @internal */
export const GetNotesRequest$inboundSchema: z.ZodType<
  GetNotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetNotesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetNotesRequest$outboundSchema: z.ZodType<
  GetNotesRequest$Outbound,
  z.ZodTypeDef,
  GetNotesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNotesRequest$ {
  /** @deprecated use `GetNotesRequest$inboundSchema` instead. */
  export const inboundSchema = GetNotesRequest$inboundSchema;
  /** @deprecated use `GetNotesRequest$outboundSchema` instead. */
  export const outboundSchema = GetNotesRequest$outboundSchema;
  /** @deprecated use `GetNotesRequest$Outbound` instead. */
  export type Outbound = GetNotesRequest$Outbound;
}

export function getNotesRequestToJSON(
  getNotesRequest: GetNotesRequest,
): string {
  return JSON.stringify(GetNotesRequest$outboundSchema.parse(getNotesRequest));
}

export function getNotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetNotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetNotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNotesRequest' from JSON`,
  );
}

/** @internal */
export const GetNotesResponse$inboundSchema: z.ZodType<
  GetNotesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Note$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type GetNotesResponse$Outbound =
  | components.Note$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetNotesResponse$outboundSchema: z.ZodType<
  GetNotesResponse$Outbound,
  z.ZodTypeDef,
  GetNotesResponse
> = z.union([components.Note$outboundSchema, components.ErrorT$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNotesResponse$ {
  /** @deprecated use `GetNotesResponse$inboundSchema` instead. */
  export const inboundSchema = GetNotesResponse$inboundSchema;
  /** @deprecated use `GetNotesResponse$outboundSchema` instead. */
  export const outboundSchema = GetNotesResponse$outboundSchema;
  /** @deprecated use `GetNotesResponse$Outbound` instead. */
  export type Outbound = GetNotesResponse$Outbound;
}

export function getNotesResponseToJSON(
  getNotesResponse: GetNotesResponse,
): string {
  return JSON.stringify(
    GetNotesResponse$outboundSchema.parse(getNotesResponse),
  );
}

export function getNotesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetNotesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetNotesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNotesResponse' from JSON`,
  );
}
