import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobMaterialBundlesRequest = {
    /**
     * UUID of the Job Material Bundle
     */
    uuid: string;
    /**
     * Job Material Bundle fields to update
     */
    jobMaterialBundle: components.JobMaterialBundleInput;
};
export type UpdateJobMaterialBundlesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobMaterialBundlesRequest$inboundSchema: z.ZodType<UpdateJobMaterialBundlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobMaterialBundlesRequest$Outbound = {
    uuid: string;
    JobMaterialBundle: components.JobMaterialBundleInput$Outbound;
};
/** @internal */
export declare const UpdateJobMaterialBundlesRequest$outboundSchema: z.ZodType<UpdateJobMaterialBundlesRequest$Outbound, z.ZodTypeDef, UpdateJobMaterialBundlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobMaterialBundlesRequest$ {
    /** @deprecated use `UpdateJobMaterialBundlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobMaterialBundlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobMaterialBundlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobMaterialBundlesRequest$Outbound, z.ZodTypeDef, UpdateJobMaterialBundlesRequest>;
    /** @deprecated use `UpdateJobMaterialBundlesRequest$Outbound` instead. */
    type Outbound = UpdateJobMaterialBundlesRequest$Outbound;
}
export declare function updateJobMaterialBundlesRequestToJSON(updateJobMaterialBundlesRequest: UpdateJobMaterialBundlesRequest): string;
export declare function updateJobMaterialBundlesRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobMaterialBundlesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobMaterialBundlesResponse$inboundSchema: z.ZodType<UpdateJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobMaterialBundlesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobMaterialBundlesResponse$outboundSchema: z.ZodType<UpdateJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, UpdateJobMaterialBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobMaterialBundlesResponse$ {
    /** @deprecated use `UpdateJobMaterialBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobMaterialBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, UpdateJobMaterialBundlesResponse>;
    /** @deprecated use `UpdateJobMaterialBundlesResponse$Outbound` instead. */
    type Outbound = UpdateJobMaterialBundlesResponse$Outbound;
}
export declare function updateJobMaterialBundlesResponseToJSON(updateJobMaterialBundlesResponse: UpdateJobMaterialBundlesResponse): string;
export declare function updateJobMaterialBundlesResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobMaterialBundlesResponse, SDKValidationError>;
//# sourceMappingURL=updatejobmaterialbundles.d.ts.map