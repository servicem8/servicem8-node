/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateJobAllocationsRequest = {
  /**
   * UUID of the Job Allocation
   */
  uuid: string;
  /**
   * Job Allocation fields to update
   */
  jobAllocation: components.JobAllocationInput;
};

export type UpdateJobAllocationsResponse =
  | components.Result
  | components.ErrorT;

/** @internal */
export const UpdateJobAllocationsRequest$inboundSchema: z.ZodType<
  UpdateJobAllocationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  JobAllocation: components.JobAllocationInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "JobAllocation": "jobAllocation",
  });
});

/** @internal */
export type UpdateJobAllocationsRequest$Outbound = {
  uuid: string;
  JobAllocation: components.JobAllocationInput$Outbound;
};

/** @internal */
export const UpdateJobAllocationsRequest$outboundSchema: z.ZodType<
  UpdateJobAllocationsRequest$Outbound,
  z.ZodTypeDef,
  UpdateJobAllocationsRequest
> = z.object({
  uuid: z.string(),
  jobAllocation: components.JobAllocationInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    jobAllocation: "JobAllocation",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateJobAllocationsRequest$ {
  /** @deprecated use `UpdateJobAllocationsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateJobAllocationsRequest$inboundSchema;
  /** @deprecated use `UpdateJobAllocationsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateJobAllocationsRequest$outboundSchema;
  /** @deprecated use `UpdateJobAllocationsRequest$Outbound` instead. */
  export type Outbound = UpdateJobAllocationsRequest$Outbound;
}

export function updateJobAllocationsRequestToJSON(
  updateJobAllocationsRequest: UpdateJobAllocationsRequest,
): string {
  return JSON.stringify(
    UpdateJobAllocationsRequest$outboundSchema.parse(
      updateJobAllocationsRequest,
    ),
  );
}

export function updateJobAllocationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateJobAllocationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateJobAllocationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateJobAllocationsRequest' from JSON`,
  );
}

/** @internal */
export const UpdateJobAllocationsResponse$inboundSchema: z.ZodType<
  UpdateJobAllocationsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type UpdateJobAllocationsResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const UpdateJobAllocationsResponse$outboundSchema: z.ZodType<
  UpdateJobAllocationsResponse$Outbound,
  z.ZodTypeDef,
  UpdateJobAllocationsResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateJobAllocationsResponse$ {
  /** @deprecated use `UpdateJobAllocationsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateJobAllocationsResponse$inboundSchema;
  /** @deprecated use `UpdateJobAllocationsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateJobAllocationsResponse$outboundSchema;
  /** @deprecated use `UpdateJobAllocationsResponse$Outbound` instead. */
  export type Outbound = UpdateJobAllocationsResponse$Outbound;
}

export function updateJobAllocationsResponseToJSON(
  updateJobAllocationsResponse: UpdateJobAllocationsResponse,
): string {
  return JSON.stringify(
    UpdateJobAllocationsResponse$outboundSchema.parse(
      updateJobAllocationsResponse,
    ),
  );
}

export function updateJobAllocationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateJobAllocationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateJobAllocationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateJobAllocationsResponse' from JSON`,
  );
}
