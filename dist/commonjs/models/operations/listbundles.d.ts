import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListBundlesResponse = components.ErrorT | Array<components.MaterialBundle>;
/** @internal */
export declare const ListBundlesResponse$inboundSchema: z.ZodType<ListBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListBundlesResponse$Outbound = components.ErrorT$Outbound | Array<components.MaterialBundle$Outbound>;
/** @internal */
export declare const ListBundlesResponse$outboundSchema: z.ZodType<ListBundlesResponse$Outbound, z.ZodTypeDef, ListBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListBundlesResponse$ {
    /** @deprecated use `ListBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListBundlesResponse$Outbound, z.ZodTypeDef, ListBundlesResponse>;
    /** @deprecated use `ListBundlesResponse$Outbound` instead. */
    type Outbound = ListBundlesResponse$Outbound;
}
export declare function listBundlesResponseToJSON(listBundlesResponse: ListBundlesResponse): string;
export declare function listBundlesResponseFromJSON(jsonString: string): SafeParseResult<ListBundlesResponse, SDKValidationError>;
//# sourceMappingURL=listbundles.d.ts.map