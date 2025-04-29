import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateSMSTemplatesResponseResult = components.Result | components.ErrorT;
export type CreateSMSTemplatesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateSMSTemplatesResponseResult$inboundSchema: z.ZodType<CreateSMSTemplatesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSMSTemplatesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateSMSTemplatesResponseResult$outboundSchema: z.ZodType<CreateSMSTemplatesResponseResult$Outbound, z.ZodTypeDef, CreateSMSTemplatesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateSMSTemplatesResponseResult$ {
    /** @deprecated use `CreateSMSTemplatesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateSMSTemplatesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateSMSTemplatesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateSMSTemplatesResponseResult$Outbound, z.ZodTypeDef, CreateSMSTemplatesResponseResult>;
    /** @deprecated use `CreateSMSTemplatesResponseResult$Outbound` instead. */
    type Outbound = CreateSMSTemplatesResponseResult$Outbound;
}
export declare function createSMSTemplatesResponseResultToJSON(createSMSTemplatesResponseResult: CreateSMSTemplatesResponseResult): string;
export declare function createSMSTemplatesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateSMSTemplatesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateSMSTemplatesResponse$inboundSchema: z.ZodType<CreateSMSTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSMSTemplatesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateSMSTemplatesResponse$outboundSchema: z.ZodType<CreateSMSTemplatesResponse$Outbound, z.ZodTypeDef, CreateSMSTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateSMSTemplatesResponse$ {
    /** @deprecated use `CreateSMSTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateSMSTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateSMSTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateSMSTemplatesResponse$Outbound, z.ZodTypeDef, CreateSMSTemplatesResponse>;
    /** @deprecated use `CreateSMSTemplatesResponse$Outbound` instead. */
    type Outbound = CreateSMSTemplatesResponse$Outbound;
}
export declare function createSMSTemplatesResponseToJSON(createSMSTemplatesResponse: CreateSMSTemplatesResponse): string;
export declare function createSMSTemplatesResponseFromJSON(jsonString: string): SafeParseResult<CreateSMSTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=createsmstemplates.d.ts.map