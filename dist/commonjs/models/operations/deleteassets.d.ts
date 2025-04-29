import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteAssetsRequest = {
    /**
     * UUID of the Asset
     */
    uuid: string;
};
export type DeleteAssetsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteAssetsRequest$inboundSchema: z.ZodType<DeleteAssetsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAssetsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteAssetsRequest$outboundSchema: z.ZodType<DeleteAssetsRequest$Outbound, z.ZodTypeDef, DeleteAssetsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAssetsRequest$ {
    /** @deprecated use `DeleteAssetsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAssetsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAssetsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAssetsRequest$Outbound, z.ZodTypeDef, DeleteAssetsRequest>;
    /** @deprecated use `DeleteAssetsRequest$Outbound` instead. */
    type Outbound = DeleteAssetsRequest$Outbound;
}
export declare function deleteAssetsRequestToJSON(deleteAssetsRequest: DeleteAssetsRequest): string;
export declare function deleteAssetsRequestFromJSON(jsonString: string): SafeParseResult<DeleteAssetsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAssetsResponse$inboundSchema: z.ZodType<DeleteAssetsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAssetsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteAssetsResponse$outboundSchema: z.ZodType<DeleteAssetsResponse$Outbound, z.ZodTypeDef, DeleteAssetsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAssetsResponse$ {
    /** @deprecated use `DeleteAssetsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAssetsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAssetsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAssetsResponse$Outbound, z.ZodTypeDef, DeleteAssetsResponse>;
    /** @deprecated use `DeleteAssetsResponse$Outbound` instead. */
    type Outbound = DeleteAssetsResponse$Outbound;
}
export declare function deleteAssetsResponseToJSON(deleteAssetsResponse: DeleteAssetsResponse): string;
export declare function deleteAssetsResponseFromJSON(jsonString: string): SafeParseResult<DeleteAssetsResponse, SDKValidationError>;
//# sourceMappingURL=deleteassets.d.ts.map