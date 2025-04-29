import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobContactsRequest = {
    /**
     * UUID of the Job Contact
     */
    uuid: string;
    /**
     * Job Contact fields to update
     */
    jobContact: components.JobContactInput;
};
export type UpdateJobContactsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobContactsRequest$inboundSchema: z.ZodType<UpdateJobContactsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobContactsRequest$Outbound = {
    uuid: string;
    JobContact: components.JobContactInput$Outbound;
};
/** @internal */
export declare const UpdateJobContactsRequest$outboundSchema: z.ZodType<UpdateJobContactsRequest$Outbound, z.ZodTypeDef, UpdateJobContactsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobContactsRequest$ {
    /** @deprecated use `UpdateJobContactsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobContactsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobContactsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobContactsRequest$Outbound, z.ZodTypeDef, UpdateJobContactsRequest>;
    /** @deprecated use `UpdateJobContactsRequest$Outbound` instead. */
    type Outbound = UpdateJobContactsRequest$Outbound;
}
export declare function updateJobContactsRequestToJSON(updateJobContactsRequest: UpdateJobContactsRequest): string;
export declare function updateJobContactsRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobContactsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobContactsResponse$inboundSchema: z.ZodType<UpdateJobContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobContactsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobContactsResponse$outboundSchema: z.ZodType<UpdateJobContactsResponse$Outbound, z.ZodTypeDef, UpdateJobContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobContactsResponse$ {
    /** @deprecated use `UpdateJobContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobContactsResponse$Outbound, z.ZodTypeDef, UpdateJobContactsResponse>;
    /** @deprecated use `UpdateJobContactsResponse$Outbound` instead. */
    type Outbound = UpdateJobContactsResponse$Outbound;
}
export declare function updateJobContactsResponseToJSON(updateJobContactsResponse: UpdateJobContactsResponse): string;
export declare function updateJobContactsResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobContactsResponse, SDKValidationError>;
//# sourceMappingURL=updatejobcontacts.d.ts.map