/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateStaffMembersResponseResult =
  | components.Result
  | components.ErrorT;

export type CreateStaffMembersResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Result | components.ErrorT;
};

/** @internal */
export const CreateStaffMembersResponseResult$inboundSchema: z.ZodType<
  CreateStaffMembersResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type CreateStaffMembersResponseResult$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const CreateStaffMembersResponseResult$outboundSchema: z.ZodType<
  CreateStaffMembersResponseResult$Outbound,
  z.ZodTypeDef,
  CreateStaffMembersResponseResult
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateStaffMembersResponseResult$ {
  /** @deprecated use `CreateStaffMembersResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateStaffMembersResponseResult$inboundSchema;
  /** @deprecated use `CreateStaffMembersResponseResult$outboundSchema` instead. */
  export const outboundSchema = CreateStaffMembersResponseResult$outboundSchema;
  /** @deprecated use `CreateStaffMembersResponseResult$Outbound` instead. */
  export type Outbound = CreateStaffMembersResponseResult$Outbound;
}

export function createStaffMembersResponseResultToJSON(
  createStaffMembersResponseResult: CreateStaffMembersResponseResult,
): string {
  return JSON.stringify(
    CreateStaffMembersResponseResult$outboundSchema.parse(
      createStaffMembersResponseResult,
    ),
  );
}

export function createStaffMembersResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateStaffMembersResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateStaffMembersResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateStaffMembersResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateStaffMembersResponse$inboundSchema: z.ZodType<
  CreateStaffMembersResponse,
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
export type CreateStaffMembersResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Result$Outbound | components.ErrorT$Outbound;
};

/** @internal */
export const CreateStaffMembersResponse$outboundSchema: z.ZodType<
  CreateStaffMembersResponse$Outbound,
  z.ZodTypeDef,
  CreateStaffMembersResponse
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
export namespace CreateStaffMembersResponse$ {
  /** @deprecated use `CreateStaffMembersResponse$inboundSchema` instead. */
  export const inboundSchema = CreateStaffMembersResponse$inboundSchema;
  /** @deprecated use `CreateStaffMembersResponse$outboundSchema` instead. */
  export const outboundSchema = CreateStaffMembersResponse$outboundSchema;
  /** @deprecated use `CreateStaffMembersResponse$Outbound` instead. */
  export type Outbound = CreateStaffMembersResponse$Outbound;
}

export function createStaffMembersResponseToJSON(
  createStaffMembersResponse: CreateStaffMembersResponse,
): string {
  return JSON.stringify(
    CreateStaffMembersResponse$outboundSchema.parse(createStaffMembersResponse),
  );
}

export function createStaffMembersResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateStaffMembersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateStaffMembersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateStaffMembersResponse' from JSON`,
  );
}
