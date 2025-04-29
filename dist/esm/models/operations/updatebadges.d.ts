import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateBadgesRequest = {
    /**
     * UUID of the Badge
     */
    uuid: string;
    /**
     * Badge fields to update
     */
    badge: components.BadgeInput;
};
export type UpdateBadgesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateBadgesRequest$inboundSchema: z.ZodType<UpdateBadgesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateBadgesRequest$Outbound = {
    uuid: string;
    Badge: components.BadgeInput$Outbound;
};
/** @internal */
export declare const UpdateBadgesRequest$outboundSchema: z.ZodType<UpdateBadgesRequest$Outbound, z.ZodTypeDef, UpdateBadgesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateBadgesRequest$ {
    /** @deprecated use `UpdateBadgesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateBadgesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateBadgesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateBadgesRequest$Outbound, z.ZodTypeDef, UpdateBadgesRequest>;
    /** @deprecated use `UpdateBadgesRequest$Outbound` instead. */
    type Outbound = UpdateBadgesRequest$Outbound;
}
export declare function updateBadgesRequestToJSON(updateBadgesRequest: UpdateBadgesRequest): string;
export declare function updateBadgesRequestFromJSON(jsonString: string): SafeParseResult<UpdateBadgesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateBadgesResponse$inboundSchema: z.ZodType<UpdateBadgesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateBadgesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateBadgesResponse$outboundSchema: z.ZodType<UpdateBadgesResponse$Outbound, z.ZodTypeDef, UpdateBadgesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateBadgesResponse$ {
    /** @deprecated use `UpdateBadgesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateBadgesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateBadgesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateBadgesResponse$Outbound, z.ZodTypeDef, UpdateBadgesResponse>;
    /** @deprecated use `UpdateBadgesResponse$Outbound` instead. */
    type Outbound = UpdateBadgesResponse$Outbound;
}
export declare function updateBadgesResponseToJSON(updateBadgesResponse: UpdateBadgesResponse): string;
export declare function updateBadgesResponseFromJSON(jsonString: string): SafeParseResult<UpdateBadgesResponse, SDKValidationError>;
//# sourceMappingURL=updatebadges.d.ts.map