/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateAssetTypeFieldsRequest = {
  /**
   * UUID of the Asset Type Field
   */
  uuid: string;
  /**
   * Asset Type Field fields to update
   */
  assetTypeField: components.AssetTypeFieldInput;
};

export type UpdateAssetTypeFieldsResponse =
  | components.Result
  | components.ErrorT;

/** @internal */
export const UpdateAssetTypeFieldsRequest$inboundSchema: z.ZodType<
  UpdateAssetTypeFieldsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  AssetTypeField: components.AssetTypeFieldInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AssetTypeField": "assetTypeField",
  });
});

/** @internal */
export type UpdateAssetTypeFieldsRequest$Outbound = {
  uuid: string;
  AssetTypeField: components.AssetTypeFieldInput$Outbound;
};

/** @internal */
export const UpdateAssetTypeFieldsRequest$outboundSchema: z.ZodType<
  UpdateAssetTypeFieldsRequest$Outbound,
  z.ZodTypeDef,
  UpdateAssetTypeFieldsRequest
> = z.object({
  uuid: z.string(),
  assetTypeField: components.AssetTypeFieldInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    assetTypeField: "AssetTypeField",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAssetTypeFieldsRequest$ {
  /** @deprecated use `UpdateAssetTypeFieldsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAssetTypeFieldsRequest$inboundSchema;
  /** @deprecated use `UpdateAssetTypeFieldsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAssetTypeFieldsRequest$outboundSchema;
  /** @deprecated use `UpdateAssetTypeFieldsRequest$Outbound` instead. */
  export type Outbound = UpdateAssetTypeFieldsRequest$Outbound;
}

export function updateAssetTypeFieldsRequestToJSON(
  updateAssetTypeFieldsRequest: UpdateAssetTypeFieldsRequest,
): string {
  return JSON.stringify(
    UpdateAssetTypeFieldsRequest$outboundSchema.parse(
      updateAssetTypeFieldsRequest,
    ),
  );
}

export function updateAssetTypeFieldsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAssetTypeFieldsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAssetTypeFieldsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAssetTypeFieldsRequest' from JSON`,
  );
}

/** @internal */
export const UpdateAssetTypeFieldsResponse$inboundSchema: z.ZodType<
  UpdateAssetTypeFieldsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type UpdateAssetTypeFieldsResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const UpdateAssetTypeFieldsResponse$outboundSchema: z.ZodType<
  UpdateAssetTypeFieldsResponse$Outbound,
  z.ZodTypeDef,
  UpdateAssetTypeFieldsResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAssetTypeFieldsResponse$ {
  /** @deprecated use `UpdateAssetTypeFieldsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateAssetTypeFieldsResponse$inboundSchema;
  /** @deprecated use `UpdateAssetTypeFieldsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateAssetTypeFieldsResponse$outboundSchema;
  /** @deprecated use `UpdateAssetTypeFieldsResponse$Outbound` instead. */
  export type Outbound = UpdateAssetTypeFieldsResponse$Outbound;
}

export function updateAssetTypeFieldsResponseToJSON(
  updateAssetTypeFieldsResponse: UpdateAssetTypeFieldsResponse,
): string {
  return JSON.stringify(
    UpdateAssetTypeFieldsResponse$outboundSchema.parse(
      updateAssetTypeFieldsResponse,
    ),
  );
}

export function updateAssetTypeFieldsResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAssetTypeFieldsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAssetTypeFieldsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAssetTypeFieldsResponse' from JSON`,
  );
}
