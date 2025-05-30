/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateSMSTemplatesRequest = {
  /**
   * UUID of the SMS Template
   */
  uuid: string;
  /**
   * SMS Template fields to update
   */
  smsTemplate: components.SmsTemplateInput;
};

export type UpdateSMSTemplatesResponse = components.Result | components.ErrorT;

/** @internal */
export const UpdateSMSTemplatesRequest$inboundSchema: z.ZodType<
  UpdateSMSTemplatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  SmsTemplate: components.SmsTemplateInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "SmsTemplate": "smsTemplate",
  });
});

/** @internal */
export type UpdateSMSTemplatesRequest$Outbound = {
  uuid: string;
  SmsTemplate: components.SmsTemplateInput$Outbound;
};

/** @internal */
export const UpdateSMSTemplatesRequest$outboundSchema: z.ZodType<
  UpdateSMSTemplatesRequest$Outbound,
  z.ZodTypeDef,
  UpdateSMSTemplatesRequest
> = z.object({
  uuid: z.string(),
  smsTemplate: components.SmsTemplateInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    smsTemplate: "SmsTemplate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSMSTemplatesRequest$ {
  /** @deprecated use `UpdateSMSTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateSMSTemplatesRequest$inboundSchema;
  /** @deprecated use `UpdateSMSTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateSMSTemplatesRequest$outboundSchema;
  /** @deprecated use `UpdateSMSTemplatesRequest$Outbound` instead. */
  export type Outbound = UpdateSMSTemplatesRequest$Outbound;
}

export function updateSMSTemplatesRequestToJSON(
  updateSMSTemplatesRequest: UpdateSMSTemplatesRequest,
): string {
  return JSON.stringify(
    UpdateSMSTemplatesRequest$outboundSchema.parse(updateSMSTemplatesRequest),
  );
}

export function updateSMSTemplatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSMSTemplatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSMSTemplatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSMSTemplatesRequest' from JSON`,
  );
}

/** @internal */
export const UpdateSMSTemplatesResponse$inboundSchema: z.ZodType<
  UpdateSMSTemplatesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type UpdateSMSTemplatesResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const UpdateSMSTemplatesResponse$outboundSchema: z.ZodType<
  UpdateSMSTemplatesResponse$Outbound,
  z.ZodTypeDef,
  UpdateSMSTemplatesResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSMSTemplatesResponse$ {
  /** @deprecated use `UpdateSMSTemplatesResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateSMSTemplatesResponse$inboundSchema;
  /** @deprecated use `UpdateSMSTemplatesResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateSMSTemplatesResponse$outboundSchema;
  /** @deprecated use `UpdateSMSTemplatesResponse$Outbound` instead. */
  export type Outbound = UpdateSMSTemplatesResponse$Outbound;
}

export function updateSMSTemplatesResponseToJSON(
  updateSMSTemplatesResponse: UpdateSMSTemplatesResponse,
): string {
  return JSON.stringify(
    UpdateSMSTemplatesResponse$outboundSchema.parse(updateSMSTemplatesResponse),
  );
}

export function updateSMSTemplatesResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSMSTemplatesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSMSTemplatesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSMSTemplatesResponse' from JSON`,
  );
}
