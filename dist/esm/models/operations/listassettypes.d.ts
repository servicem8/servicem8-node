import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListAssetTypesResponse = components.ErrorT | Array<components.AssetType>;
/** @internal */
export declare const ListAssetTypesResponse$inboundSchema: z.ZodType<ListAssetTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAssetTypesResponse$Outbound = components.ErrorT$Outbound | Array<components.AssetType$Outbound>;
/** @internal */
export declare const ListAssetTypesResponse$outboundSchema: z.ZodType<ListAssetTypesResponse$Outbound, z.ZodTypeDef, ListAssetTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAssetTypesResponse$ {
    /** @deprecated use `ListAssetTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAssetTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAssetTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAssetTypesResponse$Outbound, z.ZodTypeDef, ListAssetTypesResponse>;
    /** @deprecated use `ListAssetTypesResponse$Outbound` instead. */
    type Outbound = ListAssetTypesResponse$Outbound;
}
export declare function listAssetTypesResponseToJSON(listAssetTypesResponse: ListAssetTypesResponse): string;
export declare function listAssetTypesResponseFromJSON(jsonString: string): SafeParseResult<ListAssetTypesResponse, SDKValidationError>;
//# sourceMappingURL=listassettypes.d.ts.map