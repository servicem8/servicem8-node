import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const SecurityRoleActive: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type SecurityRoleActive = ClosedEnum<typeof SecurityRoleActive>;
export type SecurityRole = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: SecurityRoleActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * The name given to the security role
     */
    name: string;
    roleDescription?: string | undefined;
};
export type SecurityRoleInput = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: SecurityRoleActive | undefined;
    /**
     * The name given to the security role
     */
    name: string;
    roleDescription?: string | undefined;
};
/** @internal */
export declare const SecurityRoleActive$inboundSchema: z.ZodNativeEnum<typeof SecurityRoleActive>;
/** @internal */
export declare const SecurityRoleActive$outboundSchema: z.ZodNativeEnum<typeof SecurityRoleActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SecurityRoleActive$ {
    /** @deprecated use `SecurityRoleActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `SecurityRoleActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const SecurityRole$inboundSchema: z.ZodType<SecurityRole, z.ZodTypeDef, unknown>;
/** @internal */
export type SecurityRole$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    role_description?: string | undefined;
};
/** @internal */
export declare const SecurityRole$outboundSchema: z.ZodType<SecurityRole$Outbound, z.ZodTypeDef, SecurityRole>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SecurityRole$ {
    /** @deprecated use `SecurityRole$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SecurityRole, z.ZodTypeDef, unknown>;
    /** @deprecated use `SecurityRole$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SecurityRole$Outbound, z.ZodTypeDef, SecurityRole>;
    /** @deprecated use `SecurityRole$Outbound` instead. */
    type Outbound = SecurityRole$Outbound;
}
export declare function securityRoleToJSON(securityRole: SecurityRole): string;
export declare function securityRoleFromJSON(jsonString: string): SafeParseResult<SecurityRole, SDKValidationError>;
/** @internal */
export declare const SecurityRoleInput$inboundSchema: z.ZodType<SecurityRoleInput, z.ZodTypeDef, unknown>;
/** @internal */
export type SecurityRoleInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    role_description?: string | undefined;
};
/** @internal */
export declare const SecurityRoleInput$outboundSchema: z.ZodType<SecurityRoleInput$Outbound, z.ZodTypeDef, SecurityRoleInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SecurityRoleInput$ {
    /** @deprecated use `SecurityRoleInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SecurityRoleInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `SecurityRoleInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SecurityRoleInput$Outbound, z.ZodTypeDef, SecurityRoleInput>;
    /** @deprecated use `SecurityRoleInput$Outbound` instead. */
    type Outbound = SecurityRoleInput$Outbound;
}
export declare function securityRoleInputToJSON(securityRoleInput: SecurityRoleInput): string;
export declare function securityRoleInputFromJSON(jsonString: string): SafeParseResult<SecurityRoleInput, SDKValidationError>;
//# sourceMappingURL=securityrole.d.ts.map