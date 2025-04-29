import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateEmailTemplatesResponseResult = components.Result | components.ErrorT;
export type CreateEmailTemplatesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateEmailTemplatesResponseResult$inboundSchema: z.ZodType<CreateEmailTemplatesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEmailTemplatesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateEmailTemplatesResponseResult$outboundSchema: z.ZodType<CreateEmailTemplatesResponseResult$Outbound, z.ZodTypeDef, CreateEmailTemplatesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateEmailTemplatesResponseResult$ {
    /** @deprecated use `CreateEmailTemplatesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateEmailTemplatesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateEmailTemplatesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateEmailTemplatesResponseResult$Outbound, z.ZodTypeDef, CreateEmailTemplatesResponseResult>;
    /** @deprecated use `CreateEmailTemplatesResponseResult$Outbound` instead. */
    type Outbound = CreateEmailTemplatesResponseResult$Outbound;
}
export declare function createEmailTemplatesResponseResultToJSON(createEmailTemplatesResponseResult: CreateEmailTemplatesResponseResult): string;
export declare function createEmailTemplatesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateEmailTemplatesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateEmailTemplatesResponse$inboundSchema: z.ZodType<CreateEmailTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEmailTemplatesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateEmailTemplatesResponse$outboundSchema: z.ZodType<CreateEmailTemplatesResponse$Outbound, z.ZodTypeDef, CreateEmailTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateEmailTemplatesResponse$ {
    /** @deprecated use `CreateEmailTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateEmailTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateEmailTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateEmailTemplatesResponse$Outbound, z.ZodTypeDef, CreateEmailTemplatesResponse>;
    /** @deprecated use `CreateEmailTemplatesResponse$Outbound` instead. */
    type Outbound = CreateEmailTemplatesResponse$Outbound;
}
export declare function createEmailTemplatesResponseToJSON(createEmailTemplatesResponse: CreateEmailTemplatesResponse): string;
export declare function createEmailTemplatesResponseFromJSON(jsonString: string): SafeParseResult<CreateEmailTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=createemailtemplates.d.ts.map