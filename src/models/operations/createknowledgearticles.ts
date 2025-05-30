/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateKnowledgeArticlesResponseResult =
  | components.Result
  | components.ErrorT;

export type CreateKnowledgeArticlesResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateKnowledgeArticlesResponseResult$inboundSchema: z.ZodType<
  CreateKnowledgeArticlesResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateKnowledgeArticlesResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateKnowledgeArticlesResponseResult$outboundSchema: z.ZodType<
  CreateKnowledgeArticlesResponseResult$Outbound,
  z.ZodTypeDef,
  CreateKnowledgeArticlesResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateKnowledgeArticlesResponseResult$ {
  /** @deprecated use `CreateKnowledgeArticlesResponseResult$inboundSchema` instead. */
  export const inboundSchema =
    CreateKnowledgeArticlesResponseResult$inboundSchema;
  /** @deprecated use `CreateKnowledgeArticlesResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    CreateKnowledgeArticlesResponseResult$outboundSchema;
  /** @deprecated use `CreateKnowledgeArticlesResponseResult$Outbound` instead. */
  export type Outbound = CreateKnowledgeArticlesResponseResult$Outbound;
}

export function createKnowledgeArticlesResponseResultToJSON(
  createKnowledgeArticlesResponseResult: CreateKnowledgeArticlesResponseResult,
): string {
  return JSON.stringify(
    CreateKnowledgeArticlesResponseResult$outboundSchema.parse(
      createKnowledgeArticlesResponseResult,
    ),
  );
}

export function createKnowledgeArticlesResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateKnowledgeArticlesResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateKnowledgeArticlesResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateKnowledgeArticlesResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateKnowledgeArticlesResponse$inboundSchema: z.ZodType<
  CreateKnowledgeArticlesResponse,
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
export type CreateKnowledgeArticlesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateKnowledgeArticlesResponse$outboundSchema: z.ZodType<
  CreateKnowledgeArticlesResponse$Outbound,
  z.ZodTypeDef,
  CreateKnowledgeArticlesResponse
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
export namespace CreateKnowledgeArticlesResponse$ {
  /** @deprecated use `CreateKnowledgeArticlesResponse$inboundSchema` instead. */
  export const inboundSchema = CreateKnowledgeArticlesResponse$inboundSchema;
  /** @deprecated use `CreateKnowledgeArticlesResponse$outboundSchema` instead. */
  export const outboundSchema = CreateKnowledgeArticlesResponse$outboundSchema;
  /** @deprecated use `CreateKnowledgeArticlesResponse$Outbound` instead. */
  export type Outbound = CreateKnowledgeArticlesResponse$Outbound;
}

export function createKnowledgeArticlesResponseToJSON(
  createKnowledgeArticlesResponse: CreateKnowledgeArticlesResponse,
): string {
  return JSON.stringify(
    CreateKnowledgeArticlesResponse$outboundSchema.parse(
      createKnowledgeArticlesResponse,
    ),
  );
}

export function createKnowledgeArticlesResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateKnowledgeArticlesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateKnowledgeArticlesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateKnowledgeArticlesResponse' from JSON`,
  );
}
