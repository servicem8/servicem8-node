/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateJobActivitiesResponseResult =
  | components.Result
  | components.ErrorT;

export type CreateJobActivitiesResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateJobActivitiesResponseResult$inboundSchema: z.ZodType<
  CreateJobActivitiesResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateJobActivitiesResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateJobActivitiesResponseResult$outboundSchema: z.ZodType<
  CreateJobActivitiesResponseResult$Outbound,
  z.ZodTypeDef,
  CreateJobActivitiesResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJobActivitiesResponseResult$ {
  /** @deprecated use `CreateJobActivitiesResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateJobActivitiesResponseResult$inboundSchema;
  /** @deprecated use `CreateJobActivitiesResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    CreateJobActivitiesResponseResult$outboundSchema;
  /** @deprecated use `CreateJobActivitiesResponseResult$Outbound` instead. */
  export type Outbound = CreateJobActivitiesResponseResult$Outbound;
}

export function createJobActivitiesResponseResultToJSON(
  createJobActivitiesResponseResult: CreateJobActivitiesResponseResult,
): string {
  return JSON.stringify(
    CreateJobActivitiesResponseResult$outboundSchema.parse(
      createJobActivitiesResponseResult,
    ),
  );
}

export function createJobActivitiesResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateJobActivitiesResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateJobActivitiesResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateJobActivitiesResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateJobActivitiesResponse$inboundSchema: z.ZodType<
  CreateJobActivitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    components.Result$inboundSchema,
    components.ErrorT$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type CreateJobActivitiesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateJobActivitiesResponse$outboundSchema: z.ZodType<
  CreateJobActivitiesResponse$Outbound,
  z.ZodTypeDef,
  CreateJobActivitiesResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    components.Result$outboundSchema,
    components.ErrorT$outboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJobActivitiesResponse$ {
  /** @deprecated use `CreateJobActivitiesResponse$inboundSchema` instead. */
  export const inboundSchema = CreateJobActivitiesResponse$inboundSchema;
  /** @deprecated use `CreateJobActivitiesResponse$outboundSchema` instead. */
  export const outboundSchema = CreateJobActivitiesResponse$outboundSchema;
  /** @deprecated use `CreateJobActivitiesResponse$Outbound` instead. */
  export type Outbound = CreateJobActivitiesResponse$Outbound;
}

export function createJobActivitiesResponseToJSON(
  createJobActivitiesResponse: CreateJobActivitiesResponse,
): string {
  return JSON.stringify(
    CreateJobActivitiesResponse$outboundSchema.parse(
      createJobActivitiesResponse,
    ),
  );
}

export function createJobActivitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateJobActivitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateJobActivitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateJobActivitiesResponse' from JSON`,
  );
}
