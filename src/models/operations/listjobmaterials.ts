/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListJobMaterialsResponse =
  | components.ErrorT
  | Array<components.JobMaterial>;

/** @internal */
export const ListJobMaterialsResponse$inboundSchema: z.ZodType<
  ListJobMaterialsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ErrorT$inboundSchema,
  z.array(components.JobMaterial$inboundSchema),
]);

/** @internal */
export type ListJobMaterialsResponse$Outbound =
  | components.ErrorT$Outbound
  | Array<components.JobMaterial$Outbound>;

/** @internal */
export const ListJobMaterialsResponse$outboundSchema: z.ZodType<
  ListJobMaterialsResponse$Outbound,
  z.ZodTypeDef,
  ListJobMaterialsResponse
> = z.union([
  components.ErrorT$outboundSchema,
  z.array(components.JobMaterial$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListJobMaterialsResponse$ {
  /** @deprecated use `ListJobMaterialsResponse$inboundSchema` instead. */
  export const inboundSchema = ListJobMaterialsResponse$inboundSchema;
  /** @deprecated use `ListJobMaterialsResponse$outboundSchema` instead. */
  export const outboundSchema = ListJobMaterialsResponse$outboundSchema;
  /** @deprecated use `ListJobMaterialsResponse$Outbound` instead. */
  export type Outbound = ListJobMaterialsResponse$Outbound;
}

export function listJobMaterialsResponseToJSON(
  listJobMaterialsResponse: ListJobMaterialsResponse,
): string {
  return JSON.stringify(
    ListJobMaterialsResponse$outboundSchema.parse(listJobMaterialsResponse),
  );
}

export function listJobMaterialsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListJobMaterialsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListJobMaterialsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListJobMaterialsResponse' from JSON`,
  );
}
