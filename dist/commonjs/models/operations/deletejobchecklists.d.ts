import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobChecklistsRequest = {
    /**
     * UUID of the Job Checklist
     */
    uuid: string;
};
export type DeleteJobChecklistsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobChecklistsRequest$inboundSchema: z.ZodType<DeleteJobChecklistsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobChecklistsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobChecklistsRequest$outboundSchema: z.ZodType<DeleteJobChecklistsRequest$Outbound, z.ZodTypeDef, DeleteJobChecklistsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobChecklistsRequest$ {
    /** @deprecated use `DeleteJobChecklistsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobChecklistsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobChecklistsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobChecklistsRequest$Outbound, z.ZodTypeDef, DeleteJobChecklistsRequest>;
    /** @deprecated use `DeleteJobChecklistsRequest$Outbound` instead. */
    type Outbound = DeleteJobChecklistsRequest$Outbound;
}
export declare function deleteJobChecklistsRequestToJSON(deleteJobChecklistsRequest: DeleteJobChecklistsRequest): string;
export declare function deleteJobChecklistsRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobChecklistsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobChecklistsResponse$inboundSchema: z.ZodType<DeleteJobChecklistsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobChecklistsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobChecklistsResponse$outboundSchema: z.ZodType<DeleteJobChecklistsResponse$Outbound, z.ZodTypeDef, DeleteJobChecklistsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobChecklistsResponse$ {
    /** @deprecated use `DeleteJobChecklistsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobChecklistsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobChecklistsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobChecklistsResponse$Outbound, z.ZodTypeDef, DeleteJobChecklistsResponse>;
    /** @deprecated use `DeleteJobChecklistsResponse$Outbound` instead. */
    type Outbound = DeleteJobChecklistsResponse$Outbound;
}
export declare function deleteJobChecklistsResponseToJSON(deleteJobChecklistsResponse: DeleteJobChecklistsResponse): string;
export declare function deleteJobChecklistsResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobChecklistsResponse, SDKValidationError>;
//# sourceMappingURL=deletejobchecklists.d.ts.map