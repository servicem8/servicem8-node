import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateSecurityRolesRequest = {
    /**
     * UUID of the Security Role
     */
    uuid: string;
    /**
     * Security Role fields to update
     */
    securityRole: components.SecurityRoleInput;
};
export type UpdateSecurityRolesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateSecurityRolesRequest$inboundSchema: z.ZodType<UpdateSecurityRolesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSecurityRolesRequest$Outbound = {
    uuid: string;
    SecurityRole: components.SecurityRoleInput$Outbound;
};
/** @internal */
export declare const UpdateSecurityRolesRequest$outboundSchema: z.ZodType<UpdateSecurityRolesRequest$Outbound, z.ZodTypeDef, UpdateSecurityRolesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSecurityRolesRequest$ {
    /** @deprecated use `UpdateSecurityRolesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSecurityRolesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSecurityRolesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSecurityRolesRequest$Outbound, z.ZodTypeDef, UpdateSecurityRolesRequest>;
    /** @deprecated use `UpdateSecurityRolesRequest$Outbound` instead. */
    type Outbound = UpdateSecurityRolesRequest$Outbound;
}
export declare function updateSecurityRolesRequestToJSON(updateSecurityRolesRequest: UpdateSecurityRolesRequest): string;
export declare function updateSecurityRolesRequestFromJSON(jsonString: string): SafeParseResult<UpdateSecurityRolesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateSecurityRolesResponse$inboundSchema: z.ZodType<UpdateSecurityRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSecurityRolesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateSecurityRolesResponse$outboundSchema: z.ZodType<UpdateSecurityRolesResponse$Outbound, z.ZodTypeDef, UpdateSecurityRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSecurityRolesResponse$ {
    /** @deprecated use `UpdateSecurityRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSecurityRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSecurityRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSecurityRolesResponse$Outbound, z.ZodTypeDef, UpdateSecurityRolesResponse>;
    /** @deprecated use `UpdateSecurityRolesResponse$Outbound` instead. */
    type Outbound = UpdateSecurityRolesResponse$Outbound;
}
export declare function updateSecurityRolesResponseToJSON(updateSecurityRolesResponse: UpdateSecurityRolesResponse): string;
export declare function updateSecurityRolesResponseFromJSON(jsonString: string): SafeParseResult<UpdateSecurityRolesResponse, SDKValidationError>;
//# sourceMappingURL=updatesecurityroles.d.ts.map