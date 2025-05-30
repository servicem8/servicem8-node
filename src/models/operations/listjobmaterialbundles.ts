/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListJobMaterialBundlesResponse =
  | components.ErrorT
  | Array<components.JobMaterialBundle>;

/** @internal */
export const ListJobMaterialBundlesResponse$inboundSchema: z.ZodType<
  ListJobMaterialBundlesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ErrorT$inboundSchema,
  z.array(components.JobMaterialBundle$inboundSchema),
]);

/** @internal */
export type ListJobMaterialBundlesResponse$Outbound =
  | components.ErrorT$Outbound
  | Array<components.JobMaterialBundle$Outbound>;

/** @internal */
export const ListJobMaterialBundlesResponse$outboundSchema: z.ZodType<
  ListJobMaterialBundlesResponse$Outbound,
  z.ZodTypeDef,
  ListJobMaterialBundlesResponse
> = z.union([
  components.ErrorT$outboundSchema,
  z.array(components.JobMaterialBundle$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListJobMaterialBundlesResponse$ {
  /** @deprecated use `ListJobMaterialBundlesResponse$inboundSchema` instead. */
  export const inboundSchema = ListJobMaterialBundlesResponse$inboundSchema;
  /** @deprecated use `ListJobMaterialBundlesResponse$outboundSchema` instead. */
  export const outboundSchema = ListJobMaterialBundlesResponse$outboundSchema;
  /** @deprecated use `ListJobMaterialBundlesResponse$Outbound` instead. */
  export type Outbound = ListJobMaterialBundlesResponse$Outbound;
}

export function listJobMaterialBundlesResponseToJSON(
  listJobMaterialBundlesResponse: ListJobMaterialBundlesResponse,
): string {
  return JSON.stringify(
    ListJobMaterialBundlesResponse$outboundSchema.parse(
      listJobMaterialBundlesResponse,
    ),
  );
}

export function listJobMaterialBundlesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListJobMaterialBundlesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListJobMaterialBundlesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListJobMaterialBundlesResponse' from JSON`,
  );
}
