/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateFormsResponseResult = components.Result | components.ErrorT;

export type CreateFormsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateFormsResponseResult$inboundSchema: z.ZodType<
  CreateFormsResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateFormsResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateFormsResponseResult$outboundSchema: z.ZodType<
  CreateFormsResponseResult$Outbound,
  z.ZodTypeDef,
  CreateFormsResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFormsResponseResult$ {
  /** @deprecated use `CreateFormsResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateFormsResponseResult$inboundSchema;
  /** @deprecated use `CreateFormsResponseResult$outboundSchema` instead. */
  export const outboundSchema = CreateFormsResponseResult$outboundSchema;
  /** @deprecated use `CreateFormsResponseResult$Outbound` instead. */
  export type Outbound = CreateFormsResponseResult$Outbound;
}

export function createFormsResponseResultToJSON(
  createFormsResponseResult: CreateFormsResponseResult,
): string {
  return JSON.stringify(
    CreateFormsResponseResult$outboundSchema.parse(createFormsResponseResult),
  );
}

export function createFormsResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateFormsResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFormsResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFormsResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateFormsResponse$inboundSchema: z.ZodType<
  CreateFormsResponse,
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
export type CreateFormsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateFormsResponse$outboundSchema: z.ZodType<
  CreateFormsResponse$Outbound,
  z.ZodTypeDef,
  CreateFormsResponse
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
export namespace CreateFormsResponse$ {
  /** @deprecated use `CreateFormsResponse$inboundSchema` instead. */
  export const inboundSchema = CreateFormsResponse$inboundSchema;
  /** @deprecated use `CreateFormsResponse$outboundSchema` instead. */
  export const outboundSchema = CreateFormsResponse$outboundSchema;
  /** @deprecated use `CreateFormsResponse$Outbound` instead. */
  export type Outbound = CreateFormsResponse$Outbound;
}

export function createFormsResponseToJSON(
  createFormsResponse: CreateFormsResponse,
): string {
  return JSON.stringify(
    CreateFormsResponse$outboundSchema.parse(createFormsResponse),
  );
}

export function createFormsResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateFormsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFormsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFormsResponse' from JSON`,
  );
}
