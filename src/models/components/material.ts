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
 * Boolean flag indicating whether the price and cost values include tax (1/true) or exclude tax (0/false). Controls tax calculations when determining final pricing. New materials inherit this setting from the account's default tax display preference..  Valid values are [0,1]
 */
export const PriceIncludesTaxes = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Boolean flag indicating whether the price and cost values include tax (1/true) or exclude tax (0/false). Controls tax calculations when determining final pricing. New materials inherit this setting from the account's default tax display preference..  Valid values are [0,1]
 */
export type PriceIncludesTaxes = ClosedEnum<typeof PriceIncludesTaxes>;

/**
 * Boolean flag indicating whether inventory tracking is enabled for this material (1/true) or disabled (0/false). When enabled, the quantity_in_stock is tracked and updated automatically when the material is used in jobs. Only physical products typically have this enabled..  Valid values are [0,1]
 */
export const ItemIsInventoried = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Boolean flag indicating whether inventory tracking is enabled for this material (1/true) or disabled (0/false). When enabled, the quantity_in_stock is tracked and updated automatically when the material is used in jobs. Only physical products typically have this enabled..  Valid values are [0,1]
 */
export type ItemIsInventoried = ClosedEnum<typeof ItemIsInventoried>;

/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export const MaterialActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type MaterialActive = ClosedEnum<typeof MaterialActive>;

export type Material = {
  /**
   * Name of the material, product or labour rate. The maximum length varies based on accounting package integration 30-100 characters for standard mode, up to 2000 characters for description billing mode. Required field that identifies the material in inventory lists, job forms, and invoices.
   */
  name: string;
  /**
   * Unique identifier code for the material. max length. Must be unique within an account.
   */
  itemNumber?: string | undefined;
  /**
   * The selling price of the material. May include or exclude tax based on the price_includes_taxes field. Used as the default price when adding this material to jobs and generating invoices.
   */
  price?: string | undefined;
  /**
   * The purchase cost of the material. May include or exclude tax depending on the price_includes_taxes setting. Used for profit calculations and reporting. This field may be hidden from users without appropriate permissions.
   */
  cost?: string | undefined;
  /**
   * The current inventory quantity of this material available in stock. Stored as a numeric value with decimal support. Updated automatically when materials are used in jobs or when inventory is manually adjusted. Only tracked if item_is_inventoried is enabled.
   */
  quantityInStock?: number | undefined;
  /**
   * Boolean flag indicating whether the price and cost values include tax (1/true) or exclude tax (0/false). Controls tax calculations when determining final pricing. New materials inherit this setting from the account's default tax display preference..  Valid values are [0,1]
   */
  priceIncludesTaxes?: PriceIncludesTaxes | undefined;
  /**
   * The barcode identifier for the material.  Can store UPC, EAN, or other barcode formats. Used for inventory scanning and quick material lookup in the mobile app.
   */
  barcode?: string | undefined;
  /**
   * Boolean flag indicating whether inventory tracking is enabled for this material (1/true) or disabled (0/false). When enabled, the quantity_in_stock is tracked and updated automatically when the material is used in jobs. Only physical products typically have this enabled..  Valid values are [0,1]
   */
  itemIsInventoried?: ItemIsInventoried | undefined;
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: MaterialActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  itemDescription?: string | undefined;
  useDescriptionForInvoicing?: string | undefined;
  taxRateUuid?: string | undefined;
};

export type MaterialInput = {
  /**
   * Name of the material, product or labour rate. The maximum length varies based on accounting package integration 30-100 characters for standard mode, up to 2000 characters for description billing mode. Required field that identifies the material in inventory lists, job forms, and invoices.
   */
  name: string;
  /**
   * Unique identifier code for the material. max length. Must be unique within an account.
   */
  itemNumber?: string | undefined;
  /**
   * The selling price of the material. May include or exclude tax based on the price_includes_taxes field. Used as the default price when adding this material to jobs and generating invoices.
   */
  price?: string | undefined;
  /**
   * The purchase cost of the material. May include or exclude tax depending on the price_includes_taxes setting. Used for profit calculations and reporting. This field may be hidden from users without appropriate permissions.
   */
  cost?: string | undefined;
  /**
   * The current inventory quantity of this material available in stock. Stored as a numeric value with decimal support. Updated automatically when materials are used in jobs or when inventory is manually adjusted. Only tracked if item_is_inventoried is enabled.
   */
  quantityInStock?: number | undefined;
  /**
   * Boolean flag indicating whether the price and cost values include tax (1/true) or exclude tax (0/false). Controls tax calculations when determining final pricing. New materials inherit this setting from the account's default tax display preference..  Valid values are [0,1]
   */
  priceIncludesTaxes?: PriceIncludesTaxes | undefined;
  /**
   * The barcode identifier for the material.  Can store UPC, EAN, or other barcode formats. Used for inventory scanning and quick material lookup in the mobile app.
   */
  barcode?: string | undefined;
  /**
   * Boolean flag indicating whether inventory tracking is enabled for this material (1/true) or disabled (0/false). When enabled, the quantity_in_stock is tracked and updated automatically when the material is used in jobs. Only physical products typically have this enabled..  Valid values are [0,1]
   */
  itemIsInventoried?: ItemIsInventoried | undefined;
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: MaterialActive | undefined;
  itemDescription?: string | undefined;
  useDescriptionForInvoicing?: string | undefined;
  taxRateUuid?: string | undefined;
};

/** @internal */
export const PriceIncludesTaxes$inboundSchema: z.ZodNativeEnum<
  typeof PriceIncludesTaxes
> = z.nativeEnum(PriceIncludesTaxes);

/** @internal */
export const PriceIncludesTaxes$outboundSchema: z.ZodNativeEnum<
  typeof PriceIncludesTaxes
> = PriceIncludesTaxes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PriceIncludesTaxes$ {
  /** @deprecated use `PriceIncludesTaxes$inboundSchema` instead. */
  export const inboundSchema = PriceIncludesTaxes$inboundSchema;
  /** @deprecated use `PriceIncludesTaxes$outboundSchema` instead. */
  export const outboundSchema = PriceIncludesTaxes$outboundSchema;
}

/** @internal */
export const ItemIsInventoried$inboundSchema: z.ZodNativeEnum<
  typeof ItemIsInventoried
> = z.nativeEnum(ItemIsInventoried);

/** @internal */
export const ItemIsInventoried$outboundSchema: z.ZodNativeEnum<
  typeof ItemIsInventoried
> = ItemIsInventoried$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ItemIsInventoried$ {
  /** @deprecated use `ItemIsInventoried$inboundSchema` instead. */
  export const inboundSchema = ItemIsInventoried$inboundSchema;
  /** @deprecated use `ItemIsInventoried$outboundSchema` instead. */
  export const outboundSchema = ItemIsInventoried$outboundSchema;
}

/** @internal */
export const MaterialActive$inboundSchema: z.ZodNativeEnum<
  typeof MaterialActive
> = z.nativeEnum(MaterialActive);

/** @internal */
export const MaterialActive$outboundSchema: z.ZodNativeEnum<
  typeof MaterialActive
> = MaterialActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaterialActive$ {
  /** @deprecated use `MaterialActive$inboundSchema` instead. */
  export const inboundSchema = MaterialActive$inboundSchema;
  /** @deprecated use `MaterialActive$outboundSchema` instead. */
  export const outboundSchema = MaterialActive$outboundSchema;
}

/** @internal */
export const Material$inboundSchema: z.ZodType<
  Material,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  item_number: z.string().optional(),
  price: z.string().optional(),
  cost: z.string().optional(),
  quantity_in_stock: z.number().optional(),
  price_includes_taxes: PriceIncludesTaxes$inboundSchema.optional(),
  barcode: z.string().optional(),
  item_is_inventoried: ItemIsInventoried$inboundSchema.optional(),
  uuid: z.string().optional(),
  active: MaterialActive$inboundSchema.default(1),
  edit_date: z.any().optional(),
  item_description: z.string().optional(),
  use_description_for_invoicing: z.string().optional(),
  tax_rate_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "item_number": "itemNumber",
    "quantity_in_stock": "quantityInStock",
    "price_includes_taxes": "priceIncludesTaxes",
    "item_is_inventoried": "itemIsInventoried",
    "edit_date": "editDate",
    "item_description": "itemDescription",
    "use_description_for_invoicing": "useDescriptionForInvoicing",
    "tax_rate_uuid": "taxRateUuid",
  });
});

/** @internal */
export type Material$Outbound = {
  name: string;
  item_number?: string | undefined;
  price?: string | undefined;
  cost?: string | undefined;
  quantity_in_stock?: number | undefined;
  price_includes_taxes?: number | undefined;
  barcode?: string | undefined;
  item_is_inventoried?: number | undefined;
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  item_description?: string | undefined;
  use_description_for_invoicing?: string | undefined;
  tax_rate_uuid?: string | undefined;
};

/** @internal */
export const Material$outboundSchema: z.ZodType<
  Material$Outbound,
  z.ZodTypeDef,
  Material
> = z.object({
  name: z.string(),
  itemNumber: z.string().optional(),
  price: z.string().optional(),
  cost: z.string().optional(),
  quantityInStock: z.number().optional(),
  priceIncludesTaxes: PriceIncludesTaxes$outboundSchema.optional(),
  barcode: z.string().optional(),
  itemIsInventoried: ItemIsInventoried$outboundSchema.optional(),
  uuid: z.string().optional(),
  active: MaterialActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  itemDescription: z.string().optional(),
  useDescriptionForInvoicing: z.string().optional(),
  taxRateUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    itemNumber: "item_number",
    quantityInStock: "quantity_in_stock",
    priceIncludesTaxes: "price_includes_taxes",
    itemIsInventoried: "item_is_inventoried",
    editDate: "edit_date",
    itemDescription: "item_description",
    useDescriptionForInvoicing: "use_description_for_invoicing",
    taxRateUuid: "tax_rate_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Material$ {
  /** @deprecated use `Material$inboundSchema` instead. */
  export const inboundSchema = Material$inboundSchema;
  /** @deprecated use `Material$outboundSchema` instead. */
  export const outboundSchema = Material$outboundSchema;
  /** @deprecated use `Material$Outbound` instead. */
  export type Outbound = Material$Outbound;
}

export function materialToJSON(material: Material): string {
  return JSON.stringify(Material$outboundSchema.parse(material));
}

export function materialFromJSON(
  jsonString: string,
): SafeParseResult<Material, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Material$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Material' from JSON`,
  );
}

/** @internal */
export const MaterialInput$inboundSchema: z.ZodType<
  MaterialInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  item_number: z.string().optional(),
  price: z.string().optional(),
  cost: z.string().optional(),
  quantity_in_stock: z.number().optional(),
  price_includes_taxes: PriceIncludesTaxes$inboundSchema.optional(),
  barcode: z.string().optional(),
  item_is_inventoried: ItemIsInventoried$inboundSchema.optional(),
  uuid: z.string().optional(),
  active: MaterialActive$inboundSchema.default(1),
  item_description: z.string().optional(),
  use_description_for_invoicing: z.string().optional(),
  tax_rate_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "item_number": "itemNumber",
    "quantity_in_stock": "quantityInStock",
    "price_includes_taxes": "priceIncludesTaxes",
    "item_is_inventoried": "itemIsInventoried",
    "item_description": "itemDescription",
    "use_description_for_invoicing": "useDescriptionForInvoicing",
    "tax_rate_uuid": "taxRateUuid",
  });
});

/** @internal */
export type MaterialInput$Outbound = {
  name: string;
  item_number?: string | undefined;
  price?: string | undefined;
  cost?: string | undefined;
  quantity_in_stock?: number | undefined;
  price_includes_taxes?: number | undefined;
  barcode?: string | undefined;
  item_is_inventoried?: number | undefined;
  uuid?: string | undefined;
  active: number;
  item_description?: string | undefined;
  use_description_for_invoicing?: string | undefined;
  tax_rate_uuid?: string | undefined;
};

/** @internal */
export const MaterialInput$outboundSchema: z.ZodType<
  MaterialInput$Outbound,
  z.ZodTypeDef,
  MaterialInput
> = z.object({
  name: z.string(),
  itemNumber: z.string().optional(),
  price: z.string().optional(),
  cost: z.string().optional(),
  quantityInStock: z.number().optional(),
  priceIncludesTaxes: PriceIncludesTaxes$outboundSchema.optional(),
  barcode: z.string().optional(),
  itemIsInventoried: ItemIsInventoried$outboundSchema.optional(),
  uuid: z.string().optional(),
  active: MaterialActive$outboundSchema.default(1),
  itemDescription: z.string().optional(),
  useDescriptionForInvoicing: z.string().optional(),
  taxRateUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    itemNumber: "item_number",
    quantityInStock: "quantity_in_stock",
    priceIncludesTaxes: "price_includes_taxes",
    itemIsInventoried: "item_is_inventoried",
    itemDescription: "item_description",
    useDescriptionForInvoicing: "use_description_for_invoicing",
    taxRateUuid: "tax_rate_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaterialInput$ {
  /** @deprecated use `MaterialInput$inboundSchema` instead. */
  export const inboundSchema = MaterialInput$inboundSchema;
  /** @deprecated use `MaterialInput$outboundSchema` instead. */
  export const outboundSchema = MaterialInput$outboundSchema;
  /** @deprecated use `MaterialInput$Outbound` instead. */
  export type Outbound = MaterialInput$Outbound;
}

export function materialInputToJSON(materialInput: MaterialInput): string {
  return JSON.stringify(MaterialInput$outboundSchema.parse(materialInput));
}

export function materialInputFromJSON(
  jsonString: string,
): SafeParseResult<MaterialInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MaterialInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MaterialInput' from JSON`,
  );
}
