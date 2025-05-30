/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteFormResponsesRequest = {
  /**
   * UUID of the Form Response
   */
  uuid: string;
};

export type DeleteFormResponsesResponse = components.Result | components.ErrorT;

/** @internal */
export const DeleteFormResponsesRequest$inboundSchema: z.ZodType<
  DeleteFormResponsesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type DeleteFormResponsesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const DeleteFormResponsesRequest$outboundSchema: z.ZodType<
  DeleteFormResponsesRequest$Outbound,
  z.ZodTypeDef,
  DeleteFormResponsesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFormResponsesRequest$ {
  /** @deprecated use `DeleteFormResponsesRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteFormResponsesRequest$inboundSchema;
  /** @deprecated use `DeleteFormResponsesRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteFormResponsesRequest$outboundSchema;
  /** @deprecated use `DeleteFormResponsesRequest$Outbound` instead. */
  export type Outbound = DeleteFormResponsesRequest$Outbound;
}

export function deleteFormResponsesRequestToJSON(
  deleteFormResponsesRequest: DeleteFormResponsesRequest,
): string {
  return JSON.stringify(
    DeleteFormResponsesRequest$outboundSchema.parse(deleteFormResponsesRequest),
  );
}

export function deleteFormResponsesRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteFormResponsesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteFormResponsesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteFormResponsesRequest' from JSON`,
  );
}

/** @internal */
export const DeleteFormResponsesResponse$inboundSchema: z.ZodType<
  DeleteFormResponsesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type DeleteFormResponsesResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const DeleteFormResponsesResponse$outboundSchema: z.ZodType<
  DeleteFormResponsesResponse$Outbound,
  z.ZodTypeDef,
  DeleteFormResponsesResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFormResponsesResponse$ {
  /** @deprecated use `DeleteFormResponsesResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteFormResponsesResponse$inboundSchema;
  /** @deprecated use `DeleteFormResponsesResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteFormResponsesResponse$outboundSchema;
  /** @deprecated use `DeleteFormResponsesResponse$Outbound` instead. */
  export type Outbound = DeleteFormResponsesResponse$Outbound;
}

export function deleteFormResponsesResponseToJSON(
  deleteFormResponsesResponse: DeleteFormResponsesResponse,
): string {
  return JSON.stringify(
    DeleteFormResponsesResponse$outboundSchema.parse(
      deleteFormResponsesResponse,
    ),
  );
}

export function deleteFormResponsesResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteFormResponsesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteFormResponsesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteFormResponsesResponse' from JSON`,
  );
}
