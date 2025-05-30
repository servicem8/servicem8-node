/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateAssetTypeFieldsResponseResult =
  | components.Result
  | components.ErrorT;

export type CreateAssetTypeFieldsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateAssetTypeFieldsResponseResult$inboundSchema: z.ZodType<
  CreateAssetTypeFieldsResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateAssetTypeFieldsResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateAssetTypeFieldsResponseResult$outboundSchema: z.ZodType<
  CreateAssetTypeFieldsResponseResult$Outbound,
  z.ZodTypeDef,
  CreateAssetTypeFieldsResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssetTypeFieldsResponseResult$ {
  /** @deprecated use `CreateAssetTypeFieldsResponseResult$inboundSchema` instead. */
  export const inboundSchema =
    CreateAssetTypeFieldsResponseResult$inboundSchema;
  /** @deprecated use `CreateAssetTypeFieldsResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    CreateAssetTypeFieldsResponseResult$outboundSchema;
  /** @deprecated use `CreateAssetTypeFieldsResponseResult$Outbound` instead. */
  export type Outbound = CreateAssetTypeFieldsResponseResult$Outbound;
}

export function createAssetTypeFieldsResponseResultToJSON(
  createAssetTypeFieldsResponseResult: CreateAssetTypeFieldsResponseResult,
): string {
  return JSON.stringify(
    CreateAssetTypeFieldsResponseResult$outboundSchema.parse(
      createAssetTypeFieldsResponseResult,
    ),
  );
}

export function createAssetTypeFieldsResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateAssetTypeFieldsResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateAssetTypeFieldsResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssetTypeFieldsResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateAssetTypeFieldsResponse$inboundSchema: z.ZodType<
  CreateAssetTypeFieldsResponse,
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
export type CreateAssetTypeFieldsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateAssetTypeFieldsResponse$outboundSchema: z.ZodType<
  CreateAssetTypeFieldsResponse$Outbound,
  z.ZodTypeDef,
  CreateAssetTypeFieldsResponse
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
export namespace CreateAssetTypeFieldsResponse$ {
  /** @deprecated use `CreateAssetTypeFieldsResponse$inboundSchema` instead. */
  export const inboundSchema = CreateAssetTypeFieldsResponse$inboundSchema;
  /** @deprecated use `CreateAssetTypeFieldsResponse$outboundSchema` instead. */
  export const outboundSchema = CreateAssetTypeFieldsResponse$outboundSchema;
  /** @deprecated use `CreateAssetTypeFieldsResponse$Outbound` instead. */
  export type Outbound = CreateAssetTypeFieldsResponse$Outbound;
}

export function createAssetTypeFieldsResponseToJSON(
  createAssetTypeFieldsResponse: CreateAssetTypeFieldsResponse,
): string {
  return JSON.stringify(
    CreateAssetTypeFieldsResponse$outboundSchema.parse(
      createAssetTypeFieldsResponse,
    ),
  );
}

export function createAssetTypeFieldsResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateAssetTypeFieldsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAssetTypeFieldsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssetTypeFieldsResponse' from JSON`,
  );
}
