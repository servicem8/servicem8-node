import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobPaymentsResponseResult = components.Result | components.ErrorT;
export type CreateJobPaymentsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobPaymentsResponseResult$inboundSchema: z.ZodType<CreateJobPaymentsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobPaymentsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobPaymentsResponseResult$outboundSchema: z.ZodType<CreateJobPaymentsResponseResult$Outbound, z.ZodTypeDef, CreateJobPaymentsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobPaymentsResponseResult$ {
    /** @deprecated use `CreateJobPaymentsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobPaymentsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobPaymentsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobPaymentsResponseResult$Outbound, z.ZodTypeDef, CreateJobPaymentsResponseResult>;
    /** @deprecated use `CreateJobPaymentsResponseResult$Outbound` instead. */
    type Outbound = CreateJobPaymentsResponseResult$Outbound;
}
export declare function createJobPaymentsResponseResultToJSON(createJobPaymentsResponseResult: CreateJobPaymentsResponseResult): string;
export declare function createJobPaymentsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobPaymentsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobPaymentsResponse$inboundSchema: z.ZodType<CreateJobPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobPaymentsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobPaymentsResponse$outboundSchema: z.ZodType<CreateJobPaymentsResponse$Outbound, z.ZodTypeDef, CreateJobPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobPaymentsResponse$ {
    /** @deprecated use `CreateJobPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobPaymentsResponse$Outbound, z.ZodTypeDef, CreateJobPaymentsResponse>;
    /** @deprecated use `CreateJobPaymentsResponse$Outbound` instead. */
    type Outbound = CreateJobPaymentsResponse$Outbound;
}
export declare function createJobPaymentsResponseToJSON(createJobPaymentsResponse: CreateJobPaymentsResponse): string;
export declare function createJobPaymentsResponseFromJSON(jsonString: string): SafeParseResult<CreateJobPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=createjobpayments.d.ts.map