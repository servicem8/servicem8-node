/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export const FormFieldActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type FormFieldActive = ClosedEnum<typeof FormFieldActive>;

export type FormField = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: FormFieldActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  formUuid?: string | undefined;
  name?: string | undefined;
  fieldDataJson?: string | undefined;
  sortOrder?: string | undefined;
};

export type FormFieldInput = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: FormFieldActive | undefined;
  formUuid?: string | undefined;
  name?: string | undefined;
  fieldDataJson?: string | undefined;
  sortOrder?: string | undefined;
};

/** @internal */
export const FormFieldActive$inboundSchema: z.ZodNativeEnum<
  typeof FormFieldActive
> = z.nativeEnum(FormFieldActive);

/** @internal */
export const FormFieldActive$outboundSchema: z.ZodNativeEnum<
  typeof FormFieldActive
> = FormFieldActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FormFieldActive$ {
  /** @deprecated use `FormFieldActive$inboundSchema` instead. */
  export const inboundSchema = FormFieldActive$inboundSchema;
  /** @deprecated use `FormFieldActive$outboundSchema` instead. */
  export const outboundSchema = FormFieldActive$outboundSchema;
}

/** @internal */
export const FormField$inboundSchema: z.ZodType<
  FormField,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: FormFieldActive$inboundSchema.default(1),
  edit_date: z.any().optional(),
  form_uuid: z.string().optional(),
  name: z.string().optional(),
  field_data_json: z.string().optional(),
  sort_order: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "edit_date": "editDate",
    "form_uuid": "formUuid",
    "field_data_json": "fieldDataJson",
    "sort_order": "sortOrder",
  });
});

/** @internal */
export type FormField$Outbound = {
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  form_uuid?: string | undefined;
  name?: string | undefined;
  field_data_json?: string | undefined;
  sort_order?: string | undefined;
};

/** @internal */
export const FormField$outboundSchema: z.ZodType<
  FormField$Outbound,
  z.ZodTypeDef,
  FormField
> = z.object({
  uuid: z.string().optional(),
  active: FormFieldActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  formUuid: z.string().optional(),
  name: z.string().optional(),
  fieldDataJson: z.string().optional(),
  sortOrder: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    editDate: "edit_date",
    formUuid: "form_uuid",
    fieldDataJson: "field_data_json",
    sortOrder: "sort_order",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FormField$ {
  /** @deprecated use `FormField$inboundSchema` instead. */
  export const inboundSchema = FormField$inboundSchema;
  /** @deprecated use `FormField$outboundSchema` instead. */
  export const outboundSchema = FormField$outboundSchema;
  /** @deprecated use `FormField$Outbound` instead. */
  export type Outbound = FormField$Outbound;
}

export function formFieldToJSON(formField: FormField): string {
  return JSON.stringify(FormField$outboundSchema.parse(formField));
}

export function formFieldFromJSON(
  jsonString: string,
): SafeParseResult<FormField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FormField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FormField' from JSON`,
  );
}

/** @internal */
export const FormFieldInput$inboundSchema: z.ZodType<
  FormFieldInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: FormFieldActive$inboundSchema.default(1),
  form_uuid: z.string().optional(),
  name: z.string().optional(),
  field_data_json: z.string().optional(),
  sort_order: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "form_uuid": "formUuid",
    "field_data_json": "fieldDataJson",
    "sort_order": "sortOrder",
  });
});

/** @internal */
export type FormFieldInput$Outbound = {
  uuid?: string | undefined;
  active: number;
  form_uuid?: string | undefined;
  name?: string | undefined;
  field_data_json?: string | undefined;
  sort_order?: string | undefined;
};

/** @internal */
export const FormFieldInput$outboundSchema: z.ZodType<
  FormFieldInput$Outbound,
  z.ZodTypeDef,
  FormFieldInput
> = z.object({
  uuid: z.string().optional(),
  active: FormFieldActive$outboundSchema.default(1),
  formUuid: z.string().optional(),
  name: z.string().optional(),
  fieldDataJson: z.string().optional(),
  sortOrder: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    formUuid: "form_uuid",
    fieldDataJson: "field_data_json",
    sortOrder: "sort_order",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FormFieldInput$ {
  /** @deprecated use `FormFieldInput$inboundSchema` instead. */
  export const inboundSchema = FormFieldInput$inboundSchema;
  /** @deprecated use `FormFieldInput$outboundSchema` instead. */
  export const outboundSchema = FormFieldInput$outboundSchema;
  /** @deprecated use `FormFieldInput$Outbound` instead. */
  export type Outbound = FormFieldInput$Outbound;
}

export function formFieldInputToJSON(formFieldInput: FormFieldInput): string {
  return JSON.stringify(FormFieldInput$outboundSchema.parse(formFieldInput));
}

export function formFieldInputFromJSON(
  jsonString: string,
): SafeParseResult<FormFieldInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FormFieldInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FormFieldInput' from JSON`,
  );
}
