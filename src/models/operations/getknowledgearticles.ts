/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetKnowledgeArticlesRequest = {
  /**
   * UUID of the Knowledge Article
   */
  uuid: string;
};

export type GetKnowledgeArticlesResponse =
  | components.KnowledgeArticle
  | components.ErrorT;

/** @internal */
export const GetKnowledgeArticlesRequest$inboundSchema: z.ZodType<
  GetKnowledgeArticlesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetKnowledgeArticlesRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetKnowledgeArticlesRequest$outboundSchema: z.ZodType<
  GetKnowledgeArticlesRequest$Outbound,
  z.ZodTypeDef,
  GetKnowledgeArticlesRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetKnowledgeArticlesRequest$ {
  /** @deprecated use `GetKnowledgeArticlesRequest$inboundSchema` instead. */
  export const inboundSchema = GetKnowledgeArticlesRequest$inboundSchema;
  /** @deprecated use `GetKnowledgeArticlesRequest$outboundSchema` instead. */
  export const outboundSchema = GetKnowledgeArticlesRequest$outboundSchema;
  /** @deprecated use `GetKnowledgeArticlesRequest$Outbound` instead. */
  export type Outbound = GetKnowledgeArticlesRequest$Outbound;
}

export function getKnowledgeArticlesRequestToJSON(
  getKnowledgeArticlesRequest: GetKnowledgeArticlesRequest,
): string {
  return JSON.stringify(
    GetKnowledgeArticlesRequest$outboundSchema.parse(
      getKnowledgeArticlesRequest,
    ),
  );
}

export function getKnowledgeArticlesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetKnowledgeArticlesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetKnowledgeArticlesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetKnowledgeArticlesRequest' from JSON`,
  );
}

/** @internal */
export const GetKnowledgeArticlesResponse$inboundSchema: z.ZodType<
  GetKnowledgeArticlesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.KnowledgeArticle$inboundSchema,
  components.ErrorT$inboundSchema,
]);

/** @internal */
export type GetKnowledgeArticlesResponse$Outbound =
  | components.KnowledgeArticle$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const GetKnowledgeArticlesResponse$outboundSchema: z.ZodType<
  GetKnowledgeArticlesResponse$Outbound,
  z.ZodTypeDef,
  GetKnowledgeArticlesResponse
> = z.union([
  components.KnowledgeArticle$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetKnowledgeArticlesResponse$ {
  /** @deprecated use `GetKnowledgeArticlesResponse$inboundSchema` instead. */
  export const inboundSchema = GetKnowledgeArticlesResponse$inboundSchema;
  /** @deprecated use `GetKnowledgeArticlesResponse$outboundSchema` instead. */
  export const outboundSchema = GetKnowledgeArticlesResponse$outboundSchema;
  /** @deprecated use `GetKnowledgeArticlesResponse$Outbound` instead. */
  export type Outbound = GetKnowledgeArticlesResponse$Outbound;
}

export function getKnowledgeArticlesResponseToJSON(
  getKnowledgeArticlesResponse: GetKnowledgeArticlesResponse,
): string {
  return JSON.stringify(
    GetKnowledgeArticlesResponse$outboundSchema.parse(
      getKnowledgeArticlesResponse,
    ),
  );
}

export function getKnowledgeArticlesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetKnowledgeArticlesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetKnowledgeArticlesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetKnowledgeArticlesResponse' from JSON`,
  );
}
