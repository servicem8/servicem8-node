import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetBadgesRequest = {
    /**
     * UUID of the Badge
     */
    uuid: string;
};
export type GetBadgesResponse = components.ErrorT | components.Badge;
/** @internal */
export declare const GetBadgesRequest$inboundSchema: z.ZodType<GetBadgesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBadgesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetBadgesRequest$outboundSchema: z.ZodType<GetBadgesRequest$Outbound, z.ZodTypeDef, GetBadgesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetBadgesRequest$ {
    /** @deprecated use `GetBadgesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetBadgesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetBadgesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetBadgesRequest$Outbound, z.ZodTypeDef, GetBadgesRequest>;
    /** @deprecated use `GetBadgesRequest$Outbound` instead. */
    type Outbound = GetBadgesRequest$Outbound;
}
export declare function getBadgesRequestToJSON(getBadgesRequest: GetBadgesRequest): string;
export declare function getBadgesRequestFromJSON(jsonString: string): SafeParseResult<GetBadgesRequest, SDKValidationError>;
/** @internal */
export declare const GetBadgesResponse$inboundSchema: z.ZodType<GetBadgesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBadgesResponse$Outbound = components.ErrorT$Outbound | components.Badge$Outbound;
/** @internal */
export declare const GetBadgesResponse$outboundSchema: z.ZodType<GetBadgesResponse$Outbound, z.ZodTypeDef, GetBadgesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetBadgesResponse$ {
    /** @deprecated use `GetBadgesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetBadgesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetBadgesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetBadgesResponse$Outbound, z.ZodTypeDef, GetBadgesResponse>;
    /** @deprecated use `GetBadgesResponse$Outbound` instead. */
    type Outbound = GetBadgesResponse$Outbound;
}
export declare function getBadgesResponseToJSON(getBadgesResponse: GetBadgesResponse): string;
export declare function getBadgesResponseFromJSON(jsonString: string): SafeParseResult<GetBadgesResponse, SDKValidationError>;
//# sourceMappingURL=getbadges.d.ts.map