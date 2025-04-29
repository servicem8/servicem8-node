import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateStaffMessagesResponseResult = components.Result | components.ErrorT;
export type CreateStaffMessagesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateStaffMessagesResponseResult$inboundSchema: z.ZodType<CreateStaffMessagesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateStaffMessagesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateStaffMessagesResponseResult$outboundSchema: z.ZodType<CreateStaffMessagesResponseResult$Outbound, z.ZodTypeDef, CreateStaffMessagesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateStaffMessagesResponseResult$ {
    /** @deprecated use `CreateStaffMessagesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateStaffMessagesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateStaffMessagesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateStaffMessagesResponseResult$Outbound, z.ZodTypeDef, CreateStaffMessagesResponseResult>;
    /** @deprecated use `CreateStaffMessagesResponseResult$Outbound` instead. */
    type Outbound = CreateStaffMessagesResponseResult$Outbound;
}
export declare function createStaffMessagesResponseResultToJSON(createStaffMessagesResponseResult: CreateStaffMessagesResponseResult): string;
export declare function createStaffMessagesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateStaffMessagesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateStaffMessagesResponse$inboundSchema: z.ZodType<CreateStaffMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateStaffMessagesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateStaffMessagesResponse$outboundSchema: z.ZodType<CreateStaffMessagesResponse$Outbound, z.ZodTypeDef, CreateStaffMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateStaffMessagesResponse$ {
    /** @deprecated use `CreateStaffMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateStaffMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateStaffMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateStaffMessagesResponse$Outbound, z.ZodTypeDef, CreateStaffMessagesResponse>;
    /** @deprecated use `CreateStaffMessagesResponse$Outbound` instead. */
    type Outbound = CreateStaffMessagesResponse$Outbound;
}
export declare function createStaffMessagesResponseToJSON(createStaffMessagesResponse: CreateStaffMessagesResponse): string;
export declare function createStaffMessagesResponseFromJSON(jsonString: string): SafeParseResult<CreateStaffMessagesResponse, SDKValidationError>;
//# sourceMappingURL=createstaffmessages.d.ts.map