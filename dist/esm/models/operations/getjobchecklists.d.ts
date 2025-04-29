import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobChecklistsRequest = {
    /**
     * UUID of the Job Checklist
     */
    uuid: string;
};
export type GetJobChecklistsResponse = components.ErrorT | components.JobChecklist;
/** @internal */
export declare const GetJobChecklistsRequest$inboundSchema: z.ZodType<GetJobChecklistsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobChecklistsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobChecklistsRequest$outboundSchema: z.ZodType<GetJobChecklistsRequest$Outbound, z.ZodTypeDef, GetJobChecklistsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobChecklistsRequest$ {
    /** @deprecated use `GetJobChecklistsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobChecklistsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobChecklistsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobChecklistsRequest$Outbound, z.ZodTypeDef, GetJobChecklistsRequest>;
    /** @deprecated use `GetJobChecklistsRequest$Outbound` instead. */
    type Outbound = GetJobChecklistsRequest$Outbound;
}
export declare function getJobChecklistsRequestToJSON(getJobChecklistsRequest: GetJobChecklistsRequest): string;
export declare function getJobChecklistsRequestFromJSON(jsonString: string): SafeParseResult<GetJobChecklistsRequest, SDKValidationError>;
/** @internal */
export declare const GetJobChecklistsResponse$inboundSchema: z.ZodType<GetJobChecklistsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobChecklistsResponse$Outbound = components.ErrorT$Outbound | components.JobChecklist$Outbound;
/** @internal */
export declare const GetJobChecklistsResponse$outboundSchema: z.ZodType<GetJobChecklistsResponse$Outbound, z.ZodTypeDef, GetJobChecklistsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobChecklistsResponse$ {
    /** @deprecated use `GetJobChecklistsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobChecklistsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobChecklistsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobChecklistsResponse$Outbound, z.ZodTypeDef, GetJobChecklistsResponse>;
    /** @deprecated use `GetJobChecklistsResponse$Outbound` instead. */
    type Outbound = GetJobChecklistsResponse$Outbound;
}
export declare function getJobChecklistsResponseToJSON(getJobChecklistsResponse: GetJobChecklistsResponse): string;
export declare function getJobChecklistsResponseFromJSON(jsonString: string): SafeParseResult<GetJobChecklistsResponse, SDKValidationError>;
//# sourceMappingURL=getjobchecklists.d.ts.map