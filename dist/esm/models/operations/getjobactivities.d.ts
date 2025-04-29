import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobActivitiesRequest = {
    /**
     * UUID of the Job Activity
     */
    uuid: string;
};
export type GetJobActivitiesResponse = components.ErrorT | components.JobActivity;
/** @internal */
export declare const GetJobActivitiesRequest$inboundSchema: z.ZodType<GetJobActivitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobActivitiesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobActivitiesRequest$outboundSchema: z.ZodType<GetJobActivitiesRequest$Outbound, z.ZodTypeDef, GetJobActivitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobActivitiesRequest$ {
    /** @deprecated use `GetJobActivitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobActivitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobActivitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobActivitiesRequest$Outbound, z.ZodTypeDef, GetJobActivitiesRequest>;
    /** @deprecated use `GetJobActivitiesRequest$Outbound` instead. */
    type Outbound = GetJobActivitiesRequest$Outbound;
}
export declare function getJobActivitiesRequestToJSON(getJobActivitiesRequest: GetJobActivitiesRequest): string;
export declare function getJobActivitiesRequestFromJSON(jsonString: string): SafeParseResult<GetJobActivitiesRequest, SDKValidationError>;
/** @internal */
export declare const GetJobActivitiesResponse$inboundSchema: z.ZodType<GetJobActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobActivitiesResponse$Outbound = components.ErrorT$Outbound | components.JobActivity$Outbound;
/** @internal */
export declare const GetJobActivitiesResponse$outboundSchema: z.ZodType<GetJobActivitiesResponse$Outbound, z.ZodTypeDef, GetJobActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobActivitiesResponse$ {
    /** @deprecated use `GetJobActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobActivitiesResponse$Outbound, z.ZodTypeDef, GetJobActivitiesResponse>;
    /** @deprecated use `GetJobActivitiesResponse$Outbound` instead. */
    type Outbound = GetJobActivitiesResponse$Outbound;
}
export declare function getJobActivitiesResponseToJSON(getJobActivitiesResponse: GetJobActivitiesResponse): string;
export declare function getJobActivitiesResponseFromJSON(jsonString: string): SafeParseResult<GetJobActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=getjobactivities.d.ts.map