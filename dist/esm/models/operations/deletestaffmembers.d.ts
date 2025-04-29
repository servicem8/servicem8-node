import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteStaffMembersRequest = {
    /**
     * UUID of the Staff Member
     */
    uuid: string;
};
export type DeleteStaffMembersResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteStaffMembersRequest$inboundSchema: z.ZodType<DeleteStaffMembersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteStaffMembersRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteStaffMembersRequest$outboundSchema: z.ZodType<DeleteStaffMembersRequest$Outbound, z.ZodTypeDef, DeleteStaffMembersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteStaffMembersRequest$ {
    /** @deprecated use `DeleteStaffMembersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteStaffMembersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteStaffMembersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteStaffMembersRequest$Outbound, z.ZodTypeDef, DeleteStaffMembersRequest>;
    /** @deprecated use `DeleteStaffMembersRequest$Outbound` instead. */
    type Outbound = DeleteStaffMembersRequest$Outbound;
}
export declare function deleteStaffMembersRequestToJSON(deleteStaffMembersRequest: DeleteStaffMembersRequest): string;
export declare function deleteStaffMembersRequestFromJSON(jsonString: string): SafeParseResult<DeleteStaffMembersRequest, SDKValidationError>;
/** @internal */
export declare const DeleteStaffMembersResponse$inboundSchema: z.ZodType<DeleteStaffMembersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteStaffMembersResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteStaffMembersResponse$outboundSchema: z.ZodType<DeleteStaffMembersResponse$Outbound, z.ZodTypeDef, DeleteStaffMembersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteStaffMembersResponse$ {
    /** @deprecated use `DeleteStaffMembersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteStaffMembersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteStaffMembersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteStaffMembersResponse$Outbound, z.ZodTypeDef, DeleteStaffMembersResponse>;
    /** @deprecated use `DeleteStaffMembersResponse$Outbound` instead. */
    type Outbound = DeleteStaffMembersResponse$Outbound;
}
export declare function deleteStaffMembersResponseToJSON(deleteStaffMembersResponse: DeleteStaffMembersResponse): string;
export declare function deleteStaffMembersResponseFromJSON(jsonString: string): SafeParseResult<DeleteStaffMembersResponse, SDKValidationError>;
//# sourceMappingURL=deletestaffmembers.d.ts.map