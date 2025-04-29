import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobActivitiesRequest = {
    /**
     * UUID of the Job Activity
     */
    uuid: string;
};
export type DeleteJobActivitiesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobActivitiesRequest$inboundSchema: z.ZodType<DeleteJobActivitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobActivitiesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobActivitiesRequest$outboundSchema: z.ZodType<DeleteJobActivitiesRequest$Outbound, z.ZodTypeDef, DeleteJobActivitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobActivitiesRequest$ {
    /** @deprecated use `DeleteJobActivitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobActivitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobActivitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobActivitiesRequest$Outbound, z.ZodTypeDef, DeleteJobActivitiesRequest>;
    /** @deprecated use `DeleteJobActivitiesRequest$Outbound` instead. */
    type Outbound = DeleteJobActivitiesRequest$Outbound;
}
export declare function deleteJobActivitiesRequestToJSON(deleteJobActivitiesRequest: DeleteJobActivitiesRequest): string;
export declare function deleteJobActivitiesRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobActivitiesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobActivitiesResponse$inboundSchema: z.ZodType<DeleteJobActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobActivitiesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobActivitiesResponse$outboundSchema: z.ZodType<DeleteJobActivitiesResponse$Outbound, z.ZodTypeDef, DeleteJobActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobActivitiesResponse$ {
    /** @deprecated use `DeleteJobActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobActivitiesResponse$Outbound, z.ZodTypeDef, DeleteJobActivitiesResponse>;
    /** @deprecated use `DeleteJobActivitiesResponse$Outbound` instead. */
    type Outbound = DeleteJobActivitiesResponse$Outbound;
}
export declare function deleteJobActivitiesResponseToJSON(deleteJobActivitiesResponse: DeleteJobActivitiesResponse): string;
export declare function deleteJobActivitiesResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=deletejobactivities.d.ts.map