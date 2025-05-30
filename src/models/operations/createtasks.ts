/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTasksResponseResult = components.Result | components.ErrorT;

export type CreateTasksResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateTasksResponseResult$inboundSchema: z.ZodType<
  CreateTasksResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateTasksResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateTasksResponseResult$outboundSchema: z.ZodType<
  CreateTasksResponseResult$Outbound,
  z.ZodTypeDef,
  CreateTasksResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTasksResponseResult$ {
  /** @deprecated use `CreateTasksResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateTasksResponseResult$inboundSchema;
  /** @deprecated use `CreateTasksResponseResult$outboundSchema` instead. */
  export const outboundSchema = CreateTasksResponseResult$outboundSchema;
  /** @deprecated use `CreateTasksResponseResult$Outbound` instead. */
  export type Outbound = CreateTasksResponseResult$Outbound;
}

export function createTasksResponseResultToJSON(
  createTasksResponseResult: CreateTasksResponseResult,
): string {
  return JSON.stringify(
    CreateTasksResponseResult$outboundSchema.parse(createTasksResponseResult),
  );
}

export function createTasksResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateTasksResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTasksResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTasksResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateTasksResponse$inboundSchema: z.ZodType<
  CreateTasksResponse,
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
export type CreateTasksResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateTasksResponse$outboundSchema: z.ZodType<
  CreateTasksResponse$Outbound,
  z.ZodTypeDef,
  CreateTasksResponse
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
export namespace CreateTasksResponse$ {
  /** @deprecated use `CreateTasksResponse$inboundSchema` instead. */
  export const inboundSchema = CreateTasksResponse$inboundSchema;
  /** @deprecated use `CreateTasksResponse$outboundSchema` instead. */
  export const outboundSchema = CreateTasksResponse$outboundSchema;
  /** @deprecated use `CreateTasksResponse$Outbound` instead. */
  export type Outbound = CreateTasksResponse$Outbound;
}

export function createTasksResponseToJSON(
  createTasksResponse: CreateTasksResponse,
): string {
  return JSON.stringify(
    CreateTasksResponse$outboundSchema.parse(createTasksResponse),
  );
}

export function createTasksResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateTasksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTasksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTasksResponse' from JSON`,
  );
}
