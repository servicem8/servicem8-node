import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateStaffMembersResponseResult = components.Result | components.ErrorT;
export type CreateStaffMembersResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateStaffMembersResponseResult$inboundSchema: z.ZodType<CreateStaffMembersResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateStaffMembersResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateStaffMembersResponseResult$outboundSchema: z.ZodType<CreateStaffMembersResponseResult$Outbound, z.ZodTypeDef, CreateStaffMembersResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateStaffMembersResponseResult$ {
    /** @deprecated use `CreateStaffMembersResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateStaffMembersResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateStaffMembersResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateStaffMembersResponseResult$Outbound, z.ZodTypeDef, CreateStaffMembersResponseResult>;
    /** @deprecated use `CreateStaffMembersResponseResult$Outbound` instead. */
    type Outbound = CreateStaffMembersResponseResult$Outbound;
}
export declare function createStaffMembersResponseResultToJSON(createStaffMembersResponseResult: CreateStaffMembersResponseResult): string;
export declare function createStaffMembersResponseResultFromJSON(jsonString: string): SafeParseResult<CreateStaffMembersResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateStaffMembersResponse$inboundSchema: z.ZodType<CreateStaffMembersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateStaffMembersResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateStaffMembersResponse$outboundSchema: z.ZodType<CreateStaffMembersResponse$Outbound, z.ZodTypeDef, CreateStaffMembersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateStaffMembersResponse$ {
    /** @deprecated use `CreateStaffMembersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateStaffMembersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateStaffMembersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateStaffMembersResponse$Outbound, z.ZodTypeDef, CreateStaffMembersResponse>;
    /** @deprecated use `CreateStaffMembersResponse$Outbound` instead. */
    type Outbound = CreateStaffMembersResponse$Outbound;
}
export declare function createStaffMembersResponseToJSON(createStaffMembersResponse: CreateStaffMembersResponse): string;
export declare function createStaffMembersResponseFromJSON(jsonString: string): SafeParseResult<CreateStaffMembersResponse, SDKValidationError>;
//# sourceMappingURL=createstaffmembers.d.ts.map