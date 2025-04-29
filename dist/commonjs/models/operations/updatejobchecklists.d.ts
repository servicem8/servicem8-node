import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobChecklistsRequest = {
    /**
     * UUID of the Job Checklist
     */
    uuid: string;
    /**
     * Job Checklist fields to update
     */
    jobChecklist: components.JobChecklistInput;
};
export type UpdateJobChecklistsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobChecklistsRequest$inboundSchema: z.ZodType<UpdateJobChecklistsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobChecklistsRequest$Outbound = {
    uuid: string;
    JobChecklist: components.JobChecklistInput$Outbound;
};
/** @internal */
export declare const UpdateJobChecklistsRequest$outboundSchema: z.ZodType<UpdateJobChecklistsRequest$Outbound, z.ZodTypeDef, UpdateJobChecklistsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobChecklistsRequest$ {
    /** @deprecated use `UpdateJobChecklistsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobChecklistsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobChecklistsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobChecklistsRequest$Outbound, z.ZodTypeDef, UpdateJobChecklistsRequest>;
    /** @deprecated use `UpdateJobChecklistsRequest$Outbound` instead. */
    type Outbound = UpdateJobChecklistsRequest$Outbound;
}
export declare function updateJobChecklistsRequestToJSON(updateJobChecklistsRequest: UpdateJobChecklistsRequest): string;
export declare function updateJobChecklistsRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobChecklistsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobChecklistsResponse$inboundSchema: z.ZodType<UpdateJobChecklistsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobChecklistsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobChecklistsResponse$outboundSchema: z.ZodType<UpdateJobChecklistsResponse$Outbound, z.ZodTypeDef, UpdateJobChecklistsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobChecklistsResponse$ {
    /** @deprecated use `UpdateJobChecklistsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobChecklistsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobChecklistsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobChecklistsResponse$Outbound, z.ZodTypeDef, UpdateJobChecklistsResponse>;
    /** @deprecated use `UpdateJobChecklistsResponse$Outbound` instead. */
    type Outbound = UpdateJobChecklistsResponse$Outbound;
}
export declare function updateJobChecklistsResponseToJSON(updateJobChecklistsResponse: UpdateJobChecklistsResponse): string;
export declare function updateJobChecklistsResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobChecklistsResponse, SDKValidationError>;
//# sourceMappingURL=updatejobchecklists.d.ts.map