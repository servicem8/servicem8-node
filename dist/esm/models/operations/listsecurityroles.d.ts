import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListSecurityRolesResponse = components.ErrorT | Array<components.SecurityRole>;
/** @internal */
export declare const ListSecurityRolesResponse$inboundSchema: z.ZodType<ListSecurityRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSecurityRolesResponse$Outbound = components.ErrorT$Outbound | Array<components.SecurityRole$Outbound>;
/** @internal */
export declare const ListSecurityRolesResponse$outboundSchema: z.ZodType<ListSecurityRolesResponse$Outbound, z.ZodTypeDef, ListSecurityRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSecurityRolesResponse$ {
    /** @deprecated use `ListSecurityRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSecurityRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSecurityRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSecurityRolesResponse$Outbound, z.ZodTypeDef, ListSecurityRolesResponse>;
    /** @deprecated use `ListSecurityRolesResponse$Outbound` instead. */
    type Outbound = ListSecurityRolesResponse$Outbound;
}
export declare function listSecurityRolesResponseToJSON(listSecurityRolesResponse: ListSecurityRolesResponse): string;
export declare function listSecurityRolesResponseFromJSON(jsonString: string): SafeParseResult<ListSecurityRolesResponse, SDKValidationError>;
//# sourceMappingURL=listsecurityroles.d.ts.map