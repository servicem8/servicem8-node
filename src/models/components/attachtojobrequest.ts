/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AttachToJobRequest = {
  jobUuid: string;
};

/** @internal */
export const AttachToJobRequest$inboundSchema: z.ZodType<
  AttachToJobRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_uuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    "job_uuid": "jobUuid",
  });
});

/** @internal */
export type AttachToJobRequest$Outbound = {
  job_uuid: string;
};

/** @internal */
export const AttachToJobRequest$outboundSchema: z.ZodType<
  AttachToJobRequest$Outbound,
  z.ZodTypeDef,
  AttachToJobRequest
> = z.object({
  jobUuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    jobUuid: "job_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AttachToJobRequest$ {
  /** @deprecated use `AttachToJobRequest$inboundSchema` instead. */
  export const inboundSchema = AttachToJobRequest$inboundSchema;
  /** @deprecated use `AttachToJobRequest$outboundSchema` instead. */
  export const outboundSchema = AttachToJobRequest$outboundSchema;
  /** @deprecated use `AttachToJobRequest$Outbound` instead. */
  export type Outbound = AttachToJobRequest$Outbound;
}

export function attachToJobRequestToJSON(
  attachToJobRequest: AttachToJobRequest,
): string {
  return JSON.stringify(
    AttachToJobRequest$outboundSchema.parse(attachToJobRequest),
  );
}

export function attachToJobRequestFromJSON(
  jsonString: string,
): SafeParseResult<AttachToJobRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AttachToJobRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AttachToJobRequest' from JSON`,
  );
}
