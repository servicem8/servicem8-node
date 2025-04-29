import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobContactsResponseResult = components.Result | components.ErrorT;
export type CreateJobContactsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobContactsResponseResult$inboundSchema: z.ZodType<CreateJobContactsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobContactsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobContactsResponseResult$outboundSchema: z.ZodType<CreateJobContactsResponseResult$Outbound, z.ZodTypeDef, CreateJobContactsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobContactsResponseResult$ {
    /** @deprecated use `CreateJobContactsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobContactsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobContactsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobContactsResponseResult$Outbound, z.ZodTypeDef, CreateJobContactsResponseResult>;
    /** @deprecated use `CreateJobContactsResponseResult$Outbound` instead. */
    type Outbound = CreateJobContactsResponseResult$Outbound;
}
export declare function createJobContactsResponseResultToJSON(createJobContactsResponseResult: CreateJobContactsResponseResult): string;
export declare function createJobContactsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobContactsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobContactsResponse$inboundSchema: z.ZodType<CreateJobContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobContactsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobContactsResponse$outboundSchema: z.ZodType<CreateJobContactsResponse$Outbound, z.ZodTypeDef, CreateJobContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobContactsResponse$ {
    /** @deprecated use `CreateJobContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobContactsResponse$Outbound, z.ZodTypeDef, CreateJobContactsResponse>;
    /** @deprecated use `CreateJobContactsResponse$Outbound` instead. */
    type Outbound = CreateJobContactsResponse$Outbound;
}
export declare function createJobContactsResponseToJSON(createJobContactsResponse: CreateJobContactsResponse): string;
export declare function createJobContactsResponseFromJSON(jsonString: string): SafeParseResult<CreateJobContactsResponse, SDKValidationError>;
//# sourceMappingURL=createjobcontacts.d.ts.map