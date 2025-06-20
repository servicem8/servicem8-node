/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCompanyContactsRequest = {
  /**
   * UUID of the Company Contact
   */
  uuid: string;
};

export type GetCompanyContactsResponse =
  | components.CompanyContact
  | components.ErrorT;

/** @internal */
export const GetCompanyContactsRequest$inboundSchema: z.ZodType<
  GetCompanyContactsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetCompanyContactsRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetCompanyContactsRequest$outboundSchema: z.ZodType<
  GetCompanyContactsRequest$Outbound,
  z.ZodTypeDef,
  GetCompanyContactsRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanyContactsRequest$ {
  /** @deprecated use `GetCompanyContactsRequest$inboundSchema` instead. */
  export const inboundSchema = GetCompanyContactsRequest$inboundSchema;
  /** @deprecated use `GetCompanyContactsRequest$outboundSchema` instead. */
  export const outboundSchema = GetCompanyContactsRequest$outboundSchema;
  /** @deprecated use `GetCompanyContactsRequest$Outbound` instead. */
  export type Outbound = GetCompanyContactsRequest$Outbound;
}

export function getCompanyContactsRequestToJSON(
  getCompanyContactsRequest: GetCompanyContactsRequest,
): string {
  return JSON.stringify(
    GetCompanyContactsRequest$outboundSchema.parse(getCompanyContactsRequest),
  );
}

export function getCompanyContactsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCompanyContactsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCompanyContactsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCompanyContactsRequest' from JSON`,
  );
}

/** @internal */
export const GetCompanyContactsResponse$inboundSchema: z.ZodType<
  GetCompanyContactsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.CompanyContact$inboundSchema,
  components.ErrorT$inboundSchema,
]);

/** @internal */
export type GetCompanyContactsResponse$Outbound =
  | components.CompanyContact$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetCompanyContactsResponse$outboundSchema: z.ZodType<
  GetCompanyContactsResponse$Outbound,
  z.ZodTypeDef,
  GetCompanyContactsResponse
> = z.union([
  components.CompanyContact$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanyContactsResponse$ {
  /** @deprecated use `GetCompanyContactsResponse$inboundSchema` instead. */
  export const inboundSchema = GetCompanyContactsResponse$inboundSchema;
  /** @deprecated use `GetCompanyContactsResponse$outboundSchema` instead. */
  export const outboundSchema = GetCompanyContactsResponse$outboundSchema;
  /** @deprecated use `GetCompanyContactsResponse$Outbound` instead. */
  export type Outbound = GetCompanyContactsResponse$Outbound;
}

export function getCompanyContactsResponseToJSON(
  getCompanyContactsResponse: GetCompanyContactsResponse,
): string {
  return JSON.stringify(
    GetCompanyContactsResponse$outboundSchema.parse(getCompanyContactsResponse),
  );
}

export function getCompanyContactsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCompanyContactsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCompanyContactsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCompanyContactsResponse' from JSON`,
  );
}
