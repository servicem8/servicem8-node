import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobContactsRequest = {
    /**
     * UUID of the Job Contact
     */
    uuid: string;
};
export type DeleteJobContactsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobContactsRequest$inboundSchema: z.ZodType<DeleteJobContactsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobContactsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobContactsRequest$outboundSchema: z.ZodType<DeleteJobContactsRequest$Outbound, z.ZodTypeDef, DeleteJobContactsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobContactsRequest$ {
    /** @deprecated use `DeleteJobContactsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobContactsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobContactsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobContactsRequest$Outbound, z.ZodTypeDef, DeleteJobContactsRequest>;
    /** @deprecated use `DeleteJobContactsRequest$Outbound` instead. */
    type Outbound = DeleteJobContactsRequest$Outbound;
}
export declare function deleteJobContactsRequestToJSON(deleteJobContactsRequest: DeleteJobContactsRequest): string;
export declare function deleteJobContactsRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobContactsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobContactsResponse$inboundSchema: z.ZodType<DeleteJobContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobContactsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobContactsResponse$outboundSchema: z.ZodType<DeleteJobContactsResponse$Outbound, z.ZodTypeDef, DeleteJobContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobContactsResponse$ {
    /** @deprecated use `DeleteJobContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobContactsResponse$Outbound, z.ZodTypeDef, DeleteJobContactsResponse>;
    /** @deprecated use `DeleteJobContactsResponse$Outbound` instead. */
    type Outbound = DeleteJobContactsResponse$Outbound;
}
export declare function deleteJobContactsResponseToJSON(deleteJobContactsResponse: DeleteJobContactsResponse): string;
export declare function deleteJobContactsResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobContactsResponse, SDKValidationError>;
//# sourceMappingURL=deletejobcontacts.d.ts.map