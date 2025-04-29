import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetStaffMembersRequest = {
    /**
     * UUID of the Staff Member
     */
    uuid: string;
};
export type GetStaffMembersResponse = components.ErrorT | components.Staff;
/** @internal */
export declare const GetStaffMembersRequest$inboundSchema: z.ZodType<GetStaffMembersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetStaffMembersRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetStaffMembersRequest$outboundSchema: z.ZodType<GetStaffMembersRequest$Outbound, z.ZodTypeDef, GetStaffMembersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetStaffMembersRequest$ {
    /** @deprecated use `GetStaffMembersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetStaffMembersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetStaffMembersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetStaffMembersRequest$Outbound, z.ZodTypeDef, GetStaffMembersRequest>;
    /** @deprecated use `GetStaffMembersRequest$Outbound` instead. */
    type Outbound = GetStaffMembersRequest$Outbound;
}
export declare function getStaffMembersRequestToJSON(getStaffMembersRequest: GetStaffMembersRequest): string;
export declare function getStaffMembersRequestFromJSON(jsonString: string): SafeParseResult<GetStaffMembersRequest, SDKValidationError>;
/** @internal */
export declare const GetStaffMembersResponse$inboundSchema: z.ZodType<GetStaffMembersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetStaffMembersResponse$Outbound = components.ErrorT$Outbound | components.Staff$Outbound;
/** @internal */
export declare const GetStaffMembersResponse$outboundSchema: z.ZodType<GetStaffMembersResponse$Outbound, z.ZodTypeDef, GetStaffMembersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetStaffMembersResponse$ {
    /** @deprecated use `GetStaffMembersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetStaffMembersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetStaffMembersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetStaffMembersResponse$Outbound, z.ZodTypeDef, GetStaffMembersResponse>;
    /** @deprecated use `GetStaffMembersResponse$Outbound` instead. */
    type Outbound = GetStaffMembersResponse$Outbound;
}
export declare function getStaffMembersResponseToJSON(getStaffMembersResponse: GetStaffMembersResponse): string;
export declare function getStaffMembersResponseFromJSON(jsonString: string): SafeParseResult<GetStaffMembersResponse, SDKValidationError>;
//# sourceMappingURL=getstaffmembers.d.ts.map