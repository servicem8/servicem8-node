import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetSecurityRolesRequest = {
    /**
     * UUID of the Security Role
     */
    uuid: string;
};
export type GetSecurityRolesResponse = components.ErrorT | components.SecurityRole;
/** @internal */
export declare const GetSecurityRolesRequest$inboundSchema: z.ZodType<GetSecurityRolesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSecurityRolesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetSecurityRolesRequest$outboundSchema: z.ZodType<GetSecurityRolesRequest$Outbound, z.ZodTypeDef, GetSecurityRolesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetSecurityRolesRequest$ {
    /** @deprecated use `GetSecurityRolesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetSecurityRolesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetSecurityRolesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetSecurityRolesRequest$Outbound, z.ZodTypeDef, GetSecurityRolesRequest>;
    /** @deprecated use `GetSecurityRolesRequest$Outbound` instead. */
    type Outbound = GetSecurityRolesRequest$Outbound;
}
export declare function getSecurityRolesRequestToJSON(getSecurityRolesRequest: GetSecurityRolesRequest): string;
export declare function getSecurityRolesRequestFromJSON(jsonString: string): SafeParseResult<GetSecurityRolesRequest, SDKValidationError>;
/** @internal */
export declare const GetSecurityRolesResponse$inboundSchema: z.ZodType<GetSecurityRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSecurityRolesResponse$Outbound = components.ErrorT$Outbound | components.SecurityRole$Outbound;
/** @internal */
export declare const GetSecurityRolesResponse$outboundSchema: z.ZodType<GetSecurityRolesResponse$Outbound, z.ZodTypeDef, GetSecurityRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetSecurityRolesResponse$ {
    /** @deprecated use `GetSecurityRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetSecurityRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetSecurityRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetSecurityRolesResponse$Outbound, z.ZodTypeDef, GetSecurityRolesResponse>;
    /** @deprecated use `GetSecurityRolesResponse$Outbound` instead. */
    type Outbound = GetSecurityRolesResponse$Outbound;
}
export declare function getSecurityRolesResponseToJSON(getSecurityRolesResponse: GetSecurityRolesResponse): string;
export declare function getSecurityRolesResponseFromJSON(jsonString: string): SafeParseResult<GetSecurityRolesResponse, SDKValidationError>;
//# sourceMappingURL=getsecurityroles.d.ts.map