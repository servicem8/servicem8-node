/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSMSTemplatesRequest = {
  /**
   * UUID of the SMS Template
   */
  uuid: string;
};

export type GetSMSTemplatesResponse =
  | components.SmsTemplate
  | components.ErrorT;

/** @internal */
export const GetSMSTemplatesRequest$inboundSchema: z.ZodType<
  GetSMSTemplatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetSMSTemplatesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetSMSTemplatesRequest$outboundSchema: z.ZodType<
  GetSMSTemplatesRequest$Outbound,
  z.ZodTypeDef,
  GetSMSTemplatesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSMSTemplatesRequest$ {
  /** @deprecated use `GetSMSTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema = GetSMSTemplatesRequest$inboundSchema;
  /** @deprecated use `GetSMSTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema = GetSMSTemplatesRequest$outboundSchema;
  /** @deprecated use `GetSMSTemplatesRequest$Outbound` instead. */
  export type Outbound = GetSMSTemplatesRequest$Outbound;
}

export function getSMSTemplatesRequestToJSON(
  getSMSTemplatesRequest: GetSMSTemplatesRequest,
): string {
  return JSON.stringify(
    GetSMSTemplatesRequest$outboundSchema.parse(getSMSTemplatesRequest),
  );
}

export function getSMSTemplatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSMSTemplatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSMSTemplatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSMSTemplatesRequest' from JSON`,
  );
}

/** @internal */
export const GetSMSTemplatesResponse$inboundSchema: z.ZodType<
  GetSMSTemplatesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.SmsTemplate$inboundSchema,
  components.ErrorT$inboundSchema,
]);

/** @internal */
export type GetSMSTemplatesResponse$Outbound =
  | components.SmsTemplate$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetSMSTemplatesResponse$outboundSchema: z.ZodType<
  GetSMSTemplatesResponse$Outbound,
  z.ZodTypeDef,
  GetSMSTemplatesResponse
> = z.union([
  components.SmsTemplate$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSMSTemplatesResponse$ {
  /** @deprecated use `GetSMSTemplatesResponse$inboundSchema` instead. */
  export const inboundSchema = GetSMSTemplatesResponse$inboundSchema;
  /** @deprecated use `GetSMSTemplatesResponse$outboundSchema` instead. */
  export const outboundSchema = GetSMSTemplatesResponse$outboundSchema;
  /** @deprecated use `GetSMSTemplatesResponse$Outbound` instead. */
  export type Outbound = GetSMSTemplatesResponse$Outbound;
}

export function getSMSTemplatesResponseToJSON(
  getSMSTemplatesResponse: GetSMSTemplatesResponse,
): string {
  return JSON.stringify(
    GetSMSTemplatesResponse$outboundSchema.parse(getSMSTemplatesResponse),
  );
}

export function getSMSTemplatesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetSMSTemplatesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSMSTemplatesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSMSTemplatesResponse' from JSON`,
  );
}
