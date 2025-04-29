import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobMaterialsRequest = {
    /**
     * UUID of the Job Material
     */
    uuid: string;
    /**
     * Job Material fields to update
     */
    jobMaterial: components.JobMaterialInput;
};
export type UpdateJobMaterialsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobMaterialsRequest$inboundSchema: z.ZodType<UpdateJobMaterialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobMaterialsRequest$Outbound = {
    uuid: string;
    JobMaterial: components.JobMaterialInput$Outbound;
};
/** @internal */
export declare const UpdateJobMaterialsRequest$outboundSchema: z.ZodType<UpdateJobMaterialsRequest$Outbound, z.ZodTypeDef, UpdateJobMaterialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobMaterialsRequest$ {
    /** @deprecated use `UpdateJobMaterialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobMaterialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobMaterialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobMaterialsRequest$Outbound, z.ZodTypeDef, UpdateJobMaterialsRequest>;
    /** @deprecated use `UpdateJobMaterialsRequest$Outbound` instead. */
    type Outbound = UpdateJobMaterialsRequest$Outbound;
}
export declare function updateJobMaterialsRequestToJSON(updateJobMaterialsRequest: UpdateJobMaterialsRequest): string;
export declare function updateJobMaterialsRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobMaterialsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobMaterialsResponse$inboundSchema: z.ZodType<UpdateJobMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobMaterialsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobMaterialsResponse$outboundSchema: z.ZodType<UpdateJobMaterialsResponse$Outbound, z.ZodTypeDef, UpdateJobMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobMaterialsResponse$ {
    /** @deprecated use `UpdateJobMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobMaterialsResponse$Outbound, z.ZodTypeDef, UpdateJobMaterialsResponse>;
    /** @deprecated use `UpdateJobMaterialsResponse$Outbound` instead. */
    type Outbound = UpdateJobMaterialsResponse$Outbound;
}
export declare function updateJobMaterialsResponseToJSON(updateJobMaterialsResponse: UpdateJobMaterialsResponse): string;
export declare function updateJobMaterialsResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=updatejobmaterials.d.ts.map