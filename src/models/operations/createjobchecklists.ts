/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateJobChecklistsResponseResult =
  | components.Result
  | components.ErrorT;

export type CreateJobChecklistsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateJobChecklistsResponseResult$inboundSchema: z.ZodType<
  CreateJobChecklistsResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateJobChecklistsResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateJobChecklistsResponseResult$outboundSchema: z.ZodType<
  CreateJobChecklistsResponseResult$Outbound,
  z.ZodTypeDef,
  CreateJobChecklistsResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJobChecklistsResponseResult$ {
  /** @deprecated use `CreateJobChecklistsResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateJobChecklistsResponseResult$inboundSchema;
  /** @deprecated use `CreateJobChecklistsResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    CreateJobChecklistsResponseResult$outboundSchema;
  /** @deprecated use `CreateJobChecklistsResponseResult$Outbound` instead. */
  export type Outbound = CreateJobChecklistsResponseResult$Outbound;
}

export function createJobChecklistsResponseResultToJSON(
  createJobChecklistsResponseResult: CreateJobChecklistsResponseResult,
): string {
  return JSON.stringify(
    CreateJobChecklistsResponseResult$outboundSchema.parse(
      createJobChecklistsResponseResult,
    ),
  );
}

export function createJobChecklistsResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateJobChecklistsResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateJobChecklistsResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateJobChecklistsResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateJobChecklistsResponse$inboundSchema: z.ZodType<
  CreateJobChecklistsResponse,
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
export type CreateJobChecklistsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateJobChecklistsResponse$outboundSchema: z.ZodType<
  CreateJobChecklistsResponse$Outbound,
  z.ZodTypeDef,
  CreateJobChecklistsResponse
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
export namespace CreateJobChecklistsResponse$ {
  /** @deprecated use `CreateJobChecklistsResponse$inboundSchema` instead. */
  export const inboundSchema = CreateJobChecklistsResponse$inboundSchema;
  /** @deprecated use `CreateJobChecklistsResponse$outboundSchema` instead. */
  export const outboundSchema = CreateJobChecklistsResponse$outboundSchema;
  /** @deprecated use `CreateJobChecklistsResponse$Outbound` instead. */
  export type Outbound = CreateJobChecklistsResponse$Outbound;
}

export function createJobChecklistsResponseToJSON(
  createJobChecklistsResponse: CreateJobChecklistsResponse,
): string {
  return JSON.stringify(
    CreateJobChecklistsResponse$outboundSchema.parse(
      createJobChecklistsResponse,
    ),
  );
}

export function createJobChecklistsResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateJobChecklistsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateJobChecklistsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateJobChecklistsResponse' from JSON`,
  );
}
