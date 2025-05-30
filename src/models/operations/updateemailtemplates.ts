/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateEmailTemplatesRequest = {
  /**
   * UUID of the Email Template
   */
  uuid: string;
  /**
   * Email Template fields to update
   */
  emailTemplate: components.EmailTemplateInput;
};

export type UpdateEmailTemplatesResponse =
  | components.Result
  | components.ErrorT;

/** @internal */
export const UpdateEmailTemplatesRequest$inboundSchema: z.ZodType<
  UpdateEmailTemplatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  EmailTemplate: components.EmailTemplateInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "EmailTemplate": "emailTemplate",
  });
});

/** @internal */
export type UpdateEmailTemplatesRequest$Outbound = {
  uuid: string;
  EmailTemplate: components.EmailTemplateInput$Outbound;
};

/** @internal */
export const UpdateEmailTemplatesRequest$outboundSchema: z.ZodType<
  UpdateEmailTemplatesRequest$Outbound,
  z.ZodTypeDef,
  UpdateEmailTemplatesRequest
> = z.object({
  uuid: z.string(),
  emailTemplate: components.EmailTemplateInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    emailTemplate: "EmailTemplate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEmailTemplatesRequest$ {
  /** @deprecated use `UpdateEmailTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateEmailTemplatesRequest$inboundSchema;
  /** @deprecated use `UpdateEmailTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateEmailTemplatesRequest$outboundSchema;
  /** @deprecated use `UpdateEmailTemplatesRequest$Outbound` instead. */
  export type Outbound = UpdateEmailTemplatesRequest$Outbound;
}

export function updateEmailTemplatesRequestToJSON(
  updateEmailTemplatesRequest: UpdateEmailTemplatesRequest,
): string {
  return JSON.stringify(
    UpdateEmailTemplatesRequest$outboundSchema.parse(
      updateEmailTemplatesRequest,
    ),
  );
}

export function updateEmailTemplatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEmailTemplatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEmailTemplatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEmailTemplatesRequest' from JSON`,
  );
}

/** @internal */
export const UpdateEmailTemplatesResponse$inboundSchema: z.ZodType<
  UpdateEmailTemplatesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.Result$inboundSchema, components.ErrorT$inboundSchema]);

/** @internal */
export type UpdateEmailTemplatesResponse$Outbound =
  | components.Result$Outbound
  | components.ErrorT$Outbound;

/** @internal */
export const UpdateEmailTemplatesResponse$outboundSchema: z.ZodType<
  UpdateEmailTemplatesResponse$Outbound,
  z.ZodTypeDef,
  UpdateEmailTemplatesResponse
> = z.union([
  components.Result$outboundSchema,
  components.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEmailTemplatesResponse$ {
  /** @deprecated use `UpdateEmailTemplatesResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateEmailTemplatesResponse$inboundSchema;
  /** @deprecated use `UpdateEmailTemplatesResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateEmailTemplatesResponse$outboundSchema;
  /** @deprecated use `UpdateEmailTemplatesResponse$Outbound` instead. */
  export type Outbound = UpdateEmailTemplatesResponse$Outbound;
}

export function updateEmailTemplatesResponseToJSON(
  updateEmailTemplatesResponse: UpdateEmailTemplatesResponse,
): string {
  return JSON.stringify(
    UpdateEmailTemplatesResponse$outboundSchema.parse(
      updateEmailTemplatesResponse,
    ),
  );
}

export function updateEmailTemplatesResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEmailTemplatesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEmailTemplatesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEmailTemplatesResponse' from JSON`,
  );
}
