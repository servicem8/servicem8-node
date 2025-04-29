import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListAssetsResponse = components.ErrorT | Array<components.Asset>;
/** @internal */
export declare const ListAssetsResponse$inboundSchema: z.ZodType<ListAssetsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAssetsResponse$Outbound = components.ErrorT$Outbound | Array<components.Asset$Outbound>;
/** @internal */
export declare const ListAssetsResponse$outboundSchema: z.ZodType<ListAssetsResponse$Outbound, z.ZodTypeDef, ListAssetsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAssetsResponse$ {
    /** @deprecated use `ListAssetsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAssetsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAssetsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAssetsResponse$Outbound, z.ZodTypeDef, ListAssetsResponse>;
    /** @deprecated use `ListAssetsResponse$Outbound` instead. */
    type Outbound = ListAssetsResponse$Outbound;
}
export declare function listAssetsResponseToJSON(listAssetsResponse: ListAssetsResponse): string;
export declare function listAssetsResponseFromJSON(jsonString: string): SafeParseResult<ListAssetsResponse, SDKValidationError>;
//# sourceMappingURL=listassets.d.ts.map