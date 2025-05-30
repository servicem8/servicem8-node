/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteSMSTemplatesRequest = {
  /**
   * UUID of the SMS Template
   */
  uuid: string;
};

export type DeleteSMSTemplatesResponse = components.Result | components.ErrorT;

/** @internal */
export const DeleteSMSTemplatesRequest$inboundSchema: z.ZodType<
  DeleteSMSTemplatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type DeleteSMSTemplatesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const DeleteSMSTemplatesRequest$outboundSchema: z.ZodType<
  DeleteSMSTemplatesRequest$Outbound,
  z.ZodTypeDef,
  DeleteSMSTemplatesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSMSTemplatesRequest$ {
  /** @deprecated use `DeleteSMSTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteSMSTemplatesRequest$inboundSchema;
  /** @deprecated use `DeleteSMSTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteSMSTemplatesRequest$outboundSchema;
  /** @deprecated use `DeleteSMSTemplatesRequest$Outbound` instead. */
  export type Outbound = DeleteSMSTemplatesRequest$Outbound;
}

export function deleteSMSTemplatesRequestToJSON(
  deleteSMSTemplatesRequest: DeleteSMSTemplatesRequest,
): string {
  return JSON.stringify(
    DeleteSMSTemplatesRequest$outboundSchema.parse(deleteSMSTemplatesRequest),
  );
}

export function deleteSMSTemplatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSMSTemplatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSMSTemplatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSMSTemplatesRequest' from JSON`,
  );
}

/** @internal */
export const DeleteSMSTemplatesResponse$inboundSchema: z.ZodType<
  DeleteSMSTemplatesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type DeleteSMSTemplatesResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const DeleteSMSTemplatesResponse$outboundSchema: z.ZodType<
  DeleteSMSTemplatesResponse$Outbound,
  z.ZodTypeDef,
  DeleteSMSTemplatesResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSMSTemplatesResponse$ {
  /** @deprecated use `DeleteSMSTemplatesResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteSMSTemplatesResponse$inboundSchema;
  /** @deprecated use `DeleteSMSTemplatesResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteSMSTemplatesResponse$outboundSchema;
  /** @deprecated use `DeleteSMSTemplatesResponse$Outbound` instead. */
  export type Outbound = DeleteSMSTemplatesResponse$Outbound;
}

export function deleteSMSTemplatesResponseToJSON(
  deleteSMSTemplatesResponse: DeleteSMSTemplatesResponse,
): string {
  return JSON.stringify(
    DeleteSMSTemplatesResponse$outboundSchema.parse(deleteSMSTemplatesResponse),
  );
}

export function deleteSMSTemplatesResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSMSTemplatesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSMSTemplatesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSMSTemplatesResponse' from JSON`,
  );
}
