import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteBadgesRequest = {
    /**
     * UUID of the Badge
     */
    uuid: string;
};
export type DeleteBadgesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteBadgesRequest$inboundSchema: z.ZodType<DeleteBadgesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteBadgesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteBadgesRequest$outboundSchema: z.ZodType<DeleteBadgesRequest$Outbound, z.ZodTypeDef, DeleteBadgesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteBadgesRequest$ {
    /** @deprecated use `DeleteBadgesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteBadgesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteBadgesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteBadgesRequest$Outbound, z.ZodTypeDef, DeleteBadgesRequest>;
    /** @deprecated use `DeleteBadgesRequest$Outbound` instead. */
    type Outbound = DeleteBadgesRequest$Outbound;
}
export declare function deleteBadgesRequestToJSON(deleteBadgesRequest: DeleteBadgesRequest): string;
export declare function deleteBadgesRequestFromJSON(jsonString: string): SafeParseResult<DeleteBadgesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteBadgesResponse$inboundSchema: z.ZodType<DeleteBadgesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteBadgesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteBadgesResponse$outboundSchema: z.ZodType<DeleteBadgesResponse$Outbound, z.ZodTypeDef, DeleteBadgesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteBadgesResponse$ {
    /** @deprecated use `DeleteBadgesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteBadgesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteBadgesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteBadgesResponse$Outbound, z.ZodTypeDef, DeleteBadgesResponse>;
    /** @deprecated use `DeleteBadgesResponse$Outbound` instead. */
    type Outbound = DeleteBadgesResponse$Outbound;
}
export declare function deleteBadgesResponseToJSON(deleteBadgesResponse: DeleteBadgesResponse): string;
export declare function deleteBadgesResponseFromJSON(jsonString: string): SafeParseResult<DeleteBadgesResponse, SDKValidationError>;
//# sourceMappingURL=deletebadges.d.ts.map