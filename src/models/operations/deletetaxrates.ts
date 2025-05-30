/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteTaxRatesRequest = {
  /**
   * UUID of the Tax Rate
   */
  uuid: string;
};

export type DeleteTaxRatesResponse = components.Result | components.ErrorT;

/** @internal */
export const DeleteTaxRatesRequest$inboundSchema: z.ZodType<
  DeleteTaxRatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type DeleteTaxRatesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const DeleteTaxRatesRequest$outboundSchema: z.ZodType<
  DeleteTaxRatesRequest$Outbound,
  z.ZodTypeDef,
  DeleteTaxRatesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTaxRatesRequest$ {
  /** @deprecated use `DeleteTaxRatesRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTaxRatesRequest$inboundSchema;
  /** @deprecated use `DeleteTaxRatesRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTaxRatesRequest$outboundSchema;
  /** @deprecated use `DeleteTaxRatesRequest$Outbound` instead. */
  export type Outbound = DeleteTaxRatesRequest$Outbound;
}

export function deleteTaxRatesRequestToJSON(
  deleteTaxRatesRequest: DeleteTaxRatesRequest,
): string {
  return JSON.stringify(
    DeleteTaxRatesRequest$outboundSchema.parse(deleteTaxRatesRequest),
  );
}

export function deleteTaxRatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTaxRatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTaxRatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTaxRatesRequest' from JSON`,
  );
}

/** @internal */
export const DeleteTaxRatesResponse$inboundSchema: z.ZodType<
  DeleteTaxRatesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type DeleteTaxRatesResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const DeleteTaxRatesResponse$outboundSchema: z.ZodType<
  DeleteTaxRatesResponse$Outbound,
  z.ZodTypeDef,
  DeleteTaxRatesResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTaxRatesResponse$ {
  /** @deprecated use `DeleteTaxRatesResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteTaxRatesResponse$inboundSchema;
  /** @deprecated use `DeleteTaxRatesResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteTaxRatesResponse$outboundSchema;
  /** @deprecated use `DeleteTaxRatesResponse$Outbound` instead. */
  export type Outbound = DeleteTaxRatesResponse$Outbound;
}

export function deleteTaxRatesResponseToJSON(
  deleteTaxRatesResponse: DeleteTaxRatesResponse,
): string {
  return JSON.stringify(
    DeleteTaxRatesResponse$outboundSchema.parse(deleteTaxRatesResponse),
  );
}

export function deleteTaxRatesResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTaxRatesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTaxRatesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTaxRatesResponse' from JSON`,
  );
}
