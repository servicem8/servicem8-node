import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobActivitiesRequest = {
    /**
     * UUID of the Job Activity
     */
    uuid: string;
    /**
     * Job Activity fields to update
     */
    jobActivity: components.JobActivityInput;
};
export type UpdateJobActivitiesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobActivitiesRequest$inboundSchema: z.ZodType<UpdateJobActivitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobActivitiesRequest$Outbound = {
    uuid: string;
    JobActivity: components.JobActivityInput$Outbound;
};
/** @internal */
export declare const UpdateJobActivitiesRequest$outboundSchema: z.ZodType<UpdateJobActivitiesRequest$Outbound, z.ZodTypeDef, UpdateJobActivitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobActivitiesRequest$ {
    /** @deprecated use `UpdateJobActivitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobActivitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobActivitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobActivitiesRequest$Outbound, z.ZodTypeDef, UpdateJobActivitiesRequest>;
    /** @deprecated use `UpdateJobActivitiesRequest$Outbound` instead. */
    type Outbound = UpdateJobActivitiesRequest$Outbound;
}
export declare function updateJobActivitiesRequestToJSON(updateJobActivitiesRequest: UpdateJobActivitiesRequest): string;
export declare function updateJobActivitiesRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobActivitiesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobActivitiesResponse$inboundSchema: z.ZodType<UpdateJobActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobActivitiesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobActivitiesResponse$outboundSchema: z.ZodType<UpdateJobActivitiesResponse$Outbound, z.ZodTypeDef, UpdateJobActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobActivitiesResponse$ {
    /** @deprecated use `UpdateJobActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobActivitiesResponse$Outbound, z.ZodTypeDef, UpdateJobActivitiesResponse>;
    /** @deprecated use `UpdateJobActivitiesResponse$Outbound` instead. */
    type Outbound = UpdateJobActivitiesResponse$Outbound;
}
export declare function updateJobActivitiesResponseToJSON(updateJobActivitiesResponse: UpdateJobActivitiesResponse): string;
export declare function updateJobActivitiesResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=updatejobactivities.d.ts.map