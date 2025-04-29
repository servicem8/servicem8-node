import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobMaterialBundlesRequest = {
    /**
     * UUID of the Job Material Bundle
     */
    uuid: string;
};
export type DeleteJobMaterialBundlesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobMaterialBundlesRequest$inboundSchema: z.ZodType<DeleteJobMaterialBundlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobMaterialBundlesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobMaterialBundlesRequest$outboundSchema: z.ZodType<DeleteJobMaterialBundlesRequest$Outbound, z.ZodTypeDef, DeleteJobMaterialBundlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobMaterialBundlesRequest$ {
    /** @deprecated use `DeleteJobMaterialBundlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobMaterialBundlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobMaterialBundlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobMaterialBundlesRequest$Outbound, z.ZodTypeDef, DeleteJobMaterialBundlesRequest>;
    /** @deprecated use `DeleteJobMaterialBundlesRequest$Outbound` instead. */
    type Outbound = DeleteJobMaterialBundlesRequest$Outbound;
}
export declare function deleteJobMaterialBundlesRequestToJSON(deleteJobMaterialBundlesRequest: DeleteJobMaterialBundlesRequest): string;
export declare function deleteJobMaterialBundlesRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobMaterialBundlesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobMaterialBundlesResponse$inboundSchema: z.ZodType<DeleteJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobMaterialBundlesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobMaterialBundlesResponse$outboundSchema: z.ZodType<DeleteJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, DeleteJobMaterialBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobMaterialBundlesResponse$ {
    /** @deprecated use `DeleteJobMaterialBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobMaterialBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, DeleteJobMaterialBundlesResponse>;
    /** @deprecated use `DeleteJobMaterialBundlesResponse$Outbound` instead. */
    type Outbound = DeleteJobMaterialBundlesResponse$Outbound;
}
export declare function deleteJobMaterialBundlesResponseToJSON(deleteJobMaterialBundlesResponse: DeleteJobMaterialBundlesResponse): string;
export declare function deleteJobMaterialBundlesResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobMaterialBundlesResponse, SDKValidationError>;
//# sourceMappingURL=deletejobmaterialbundles.d.ts.map