import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListBadgesResponse = components.ErrorT | Array<components.Badge>;
/** @internal */
export declare const ListBadgesResponse$inboundSchema: z.ZodType<ListBadgesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListBadgesResponse$Outbound = components.ErrorT$Outbound | Array<components.Badge$Outbound>;
/** @internal */
export declare const ListBadgesResponse$outboundSchema: z.ZodType<ListBadgesResponse$Outbound, z.ZodTypeDef, ListBadgesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListBadgesResponse$ {
    /** @deprecated use `ListBadgesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListBadgesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListBadgesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListBadgesResponse$Outbound, z.ZodTypeDef, ListBadgesResponse>;
    /** @deprecated use `ListBadgesResponse$Outbound` instead. */
    type Outbound = ListBadgesResponse$Outbound;
}
export declare function listBadgesResponseToJSON(listBadgesResponse: ListBadgesResponse): string;
export declare function listBadgesResponseFromJSON(jsonString: string): SafeParseResult<ListBadgesResponse, SDKValidationError>;
//# sourceMappingURL=listbadges.d.ts.map