import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateSecurityRolesResponseResult = components.Result | components.ErrorT;
export type CreateSecurityRolesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateSecurityRolesResponseResult$inboundSchema: z.ZodType<CreateSecurityRolesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSecurityRolesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateSecurityRolesResponseResult$outboundSchema: z.ZodType<CreateSecurityRolesResponseResult$Outbound, z.ZodTypeDef, CreateSecurityRolesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateSecurityRolesResponseResult$ {
    /** @deprecated use `CreateSecurityRolesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateSecurityRolesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateSecurityRolesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateSecurityRolesResponseResult$Outbound, z.ZodTypeDef, CreateSecurityRolesResponseResult>;
    /** @deprecated use `CreateSecurityRolesResponseResult$Outbound` instead. */
    type Outbound = CreateSecurityRolesResponseResult$Outbound;
}
export declare function createSecurityRolesResponseResultToJSON(createSecurityRolesResponseResult: CreateSecurityRolesResponseResult): string;
export declare function createSecurityRolesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateSecurityRolesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateSecurityRolesResponse$inboundSchema: z.ZodType<CreateSecurityRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSecurityRolesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateSecurityRolesResponse$outboundSchema: z.ZodType<CreateSecurityRolesResponse$Outbound, z.ZodTypeDef, CreateSecurityRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateSecurityRolesResponse$ {
    /** @deprecated use `CreateSecurityRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateSecurityRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateSecurityRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateSecurityRolesResponse$Outbound, z.ZodTypeDef, CreateSecurityRolesResponse>;
    /** @deprecated use `CreateSecurityRolesResponse$Outbound` instead. */
    type Outbound = CreateSecurityRolesResponse$Outbound;
}
export declare function createSecurityRolesResponseToJSON(createSecurityRolesResponse: CreateSecurityRolesResponse): string;
export declare function createSecurityRolesResponseFromJSON(jsonString: string): SafeParseResult<CreateSecurityRolesResponse, SDKValidationError>;
//# sourceMappingURL=createsecurityroles.d.ts.map