/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateNotesResponseResult = components.Result | components.ErrorT;

export type CreateNotesResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateNotesResponseResult$inboundSchema: z.ZodType<
  CreateNotesResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateNotesResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateNotesResponseResult$outboundSchema: z.ZodType<
  CreateNotesResponseResult$Outbound,
  z.ZodTypeDef,
  CreateNotesResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNotesResponseResult$ {
  /** @deprecated use `CreateNotesResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateNotesResponseResult$inboundSchema;
  /** @deprecated use `CreateNotesResponseResult$outboundSchema` instead. */
  export const outboundSchema = CreateNotesResponseResult$outboundSchema;
  /** @deprecated use `CreateNotesResponseResult$Outbound` instead. */
  export type Outbound = CreateNotesResponseResult$Outbound;
}

export function createNotesResponseResultToJSON(
  createNotesResponseResult: CreateNotesResponseResult,
): string {
  return JSON.stringify(
    CreateNotesResponseResult$outboundSchema.parse(createNotesResponseResult),
  );
}

export function createNotesResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateNotesResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNotesResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNotesResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateNotesResponse$inboundSchema: z.ZodType<
  CreateNotesResponse,
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
export type CreateNotesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateNotesResponse$outboundSchema: z.ZodType<
  CreateNotesResponse$Outbound,
  z.ZodTypeDef,
  CreateNotesResponse
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
export namespace CreateNotesResponse$ {
  /** @deprecated use `CreateNotesResponse$inboundSchema` instead. */
  export const inboundSchema = CreateNotesResponse$inboundSchema;
  /** @deprecated use `CreateNotesResponse$outboundSchema` instead. */
  export const outboundSchema = CreateNotesResponse$outboundSchema;
  /** @deprecated use `CreateNotesResponse$Outbound` instead. */
  export type Outbound = CreateNotesResponse$Outbound;
}

export function createNotesResponseToJSON(
  createNotesResponse: CreateNotesResponse,
): string {
  return JSON.stringify(
    CreateNotesResponse$outboundSchema.parse(createNotesResponse),
  );
}

export function createNotesResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateNotesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateNotesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateNotesResponse' from JSON`,
  );
}
