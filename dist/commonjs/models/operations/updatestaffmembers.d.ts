import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateStaffMembersRequest = {
    /**
     * UUID of the Staff Member
     */
    uuid: string;
    /**
     * Staff Member fields to update
     */
    staff: components.StaffInput;
};
export type UpdateStaffMembersResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateStaffMembersRequest$inboundSchema: z.ZodType<UpdateStaffMembersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaffMembersRequest$Outbound = {
    uuid: string;
    Staff: components.StaffInput$Outbound;
};
/** @internal */
export declare const UpdateStaffMembersRequest$outboundSchema: z.ZodType<UpdateStaffMembersRequest$Outbound, z.ZodTypeDef, UpdateStaffMembersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStaffMembersRequest$ {
    /** @deprecated use `UpdateStaffMembersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStaffMembersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStaffMembersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStaffMembersRequest$Outbound, z.ZodTypeDef, UpdateStaffMembersRequest>;
    /** @deprecated use `UpdateStaffMembersRequest$Outbound` instead. */
    type Outbound = UpdateStaffMembersRequest$Outbound;
}
export declare function updateStaffMembersRequestToJSON(updateStaffMembersRequest: UpdateStaffMembersRequest): string;
export declare function updateStaffMembersRequestFromJSON(jsonString: string): SafeParseResult<UpdateStaffMembersRequest, SDKValidationError>;
/** @internal */
export declare const UpdateStaffMembersResponse$inboundSchema: z.ZodType<UpdateStaffMembersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaffMembersResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateStaffMembersResponse$outboundSchema: z.ZodType<UpdateStaffMembersResponse$Outbound, z.ZodTypeDef, UpdateStaffMembersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStaffMembersResponse$ {
    /** @deprecated use `UpdateStaffMembersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStaffMembersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStaffMembersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStaffMembersResponse$Outbound, z.ZodTypeDef, UpdateStaffMembersResponse>;
    /** @deprecated use `UpdateStaffMembersResponse$Outbound` instead. */
    type Outbound = UpdateStaffMembersResponse$Outbound;
}
export declare function updateStaffMembersResponseToJSON(updateStaffMembersResponse: UpdateStaffMembersResponse): string;
export declare function updateStaffMembersResponseFromJSON(jsonString: string): SafeParseResult<UpdateStaffMembersResponse, SDKValidationError>;
//# sourceMappingURL=updatestaffmembers.d.ts.map