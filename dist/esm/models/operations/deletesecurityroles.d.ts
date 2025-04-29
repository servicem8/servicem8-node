import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteSecurityRolesRequest = {
    /**
     * UUID of the Security Role
     */
    uuid: string;
};
export type DeleteSecurityRolesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteSecurityRolesRequest$inboundSchema: z.ZodType<DeleteSecurityRolesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSecurityRolesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteSecurityRolesRequest$outboundSchema: z.ZodType<DeleteSecurityRolesRequest$Outbound, z.ZodTypeDef, DeleteSecurityRolesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteSecurityRolesRequest$ {
    /** @deprecated use `DeleteSecurityRolesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteSecurityRolesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteSecurityRolesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteSecurityRolesRequest$Outbound, z.ZodTypeDef, DeleteSecurityRolesRequest>;
    /** @deprecated use `DeleteSecurityRolesRequest$Outbound` instead. */
    type Outbound = DeleteSecurityRolesRequest$Outbound;
}
export declare function deleteSecurityRolesRequestToJSON(deleteSecurityRolesRequest: DeleteSecurityRolesRequest): string;
export declare function deleteSecurityRolesRequestFromJSON(jsonString: string): SafeParseResult<DeleteSecurityRolesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteSecurityRolesResponse$inboundSchema: z.ZodType<DeleteSecurityRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSecurityRolesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteSecurityRolesResponse$outboundSchema: z.ZodType<DeleteSecurityRolesResponse$Outbound, z.ZodTypeDef, DeleteSecurityRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteSecurityRolesResponse$ {
    /** @deprecated use `DeleteSecurityRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteSecurityRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteSecurityRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteSecurityRolesResponse$Outbound, z.ZodTypeDef, DeleteSecurityRolesResponse>;
    /** @deprecated use `DeleteSecurityRolesResponse$Outbound` instead. */
    type Outbound = DeleteSecurityRolesResponse$Outbound;
}
export declare function deleteSecurityRolesResponseToJSON(deleteSecurityRolesResponse: DeleteSecurityRolesResponse): string;
export declare function deleteSecurityRolesResponseFromJSON(jsonString: string): SafeParseResult<DeleteSecurityRolesResponse, SDKValidationError>;
//# sourceMappingURL=deletesecurityroles.d.ts.map