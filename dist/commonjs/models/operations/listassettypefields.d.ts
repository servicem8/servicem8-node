import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListAssetTypeFieldsResponse = components.ErrorT | Array<components.AssetTypeField>;
/** @internal */
export declare const ListAssetTypeFieldsResponse$inboundSchema: z.ZodType<ListAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAssetTypeFieldsResponse$Outbound = components.ErrorT$Outbound | Array<components.AssetTypeField$Outbound>;
/** @internal */
export declare const ListAssetTypeFieldsResponse$outboundSchema: z.ZodType<ListAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, ListAssetTypeFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAssetTypeFieldsResponse$ {
    /** @deprecated use `ListAssetTypeFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAssetTypeFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, ListAssetTypeFieldsResponse>;
    /** @deprecated use `ListAssetTypeFieldsResponse$Outbound` instead. */
    type Outbound = ListAssetTypeFieldsResponse$Outbound;
}
export declare function listAssetTypeFieldsResponseToJSON(listAssetTypeFieldsResponse: ListAssetTypeFieldsResponse): string;
export declare function listAssetTypeFieldsResponseFromJSON(jsonString: string): SafeParseResult<ListAssetTypeFieldsResponse, SDKValidationError>;
//# sourceMappingURL=listassettypefields.d.ts.map