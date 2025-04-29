import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateAttachmentsResponseResult = components.Result | components.ErrorT;
export type CreateAttachmentsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateAttachmentsResponseResult$inboundSchema: z.ZodType<CreateAttachmentsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAttachmentsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateAttachmentsResponseResult$outboundSchema: z.ZodType<CreateAttachmentsResponseResult$Outbound, z.ZodTypeDef, CreateAttachmentsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAttachmentsResponseResult$ {
    /** @deprecated use `CreateAttachmentsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAttachmentsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAttachmentsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAttachmentsResponseResult$Outbound, z.ZodTypeDef, CreateAttachmentsResponseResult>;
    /** @deprecated use `CreateAttachmentsResponseResult$Outbound` instead. */
    type Outbound = CreateAttachmentsResponseResult$Outbound;
}
export declare function createAttachmentsResponseResultToJSON(createAttachmentsResponseResult: CreateAttachmentsResponseResult): string;
export declare function createAttachmentsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateAttachmentsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateAttachmentsResponse$inboundSchema: z.ZodType<CreateAttachmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAttachmentsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateAttachmentsResponse$outboundSchema: z.ZodType<CreateAttachmentsResponse$Outbound, z.ZodTypeDef, CreateAttachmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAttachmentsResponse$ {
    /** @deprecated use `CreateAttachmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAttachmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAttachmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAttachmentsResponse$Outbound, z.ZodTypeDef, CreateAttachmentsResponse>;
    /** @deprecated use `CreateAttachmentsResponse$Outbound` instead. */
    type Outbound = CreateAttachmentsResponse$Outbound;
}
export declare function createAttachmentsResponseToJSON(createAttachmentsResponse: CreateAttachmentsResponse): string;
export declare function createAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<CreateAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=createattachments.d.ts.map