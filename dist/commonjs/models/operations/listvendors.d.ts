import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListVendorsResponse = components.ErrorT | Array<components.Vendor>;
/** @internal */
export declare const ListVendorsResponse$inboundSchema: z.ZodType<ListVendorsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListVendorsResponse$Outbound = components.ErrorT$Outbound | Array<components.Vendor$Outbound>;
/** @internal */
export declare const ListVendorsResponse$outboundSchema: z.ZodType<ListVendorsResponse$Outbound, z.ZodTypeDef, ListVendorsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListVendorsResponse$ {
    /** @deprecated use `ListVendorsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListVendorsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListVendorsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListVendorsResponse$Outbound, z.ZodTypeDef, ListVendorsResponse>;
    /** @deprecated use `ListVendorsResponse$Outbound` instead. */
    type Outbound = ListVendorsResponse$Outbound;
}
export declare function listVendorsResponseToJSON(listVendorsResponse: ListVendorsResponse): string;
export declare function listVendorsResponseFromJSON(jsonString: string): SafeParseResult<ListVendorsResponse, SDKValidationError>;
//# sourceMappingURL=listvendors.d.ts.map