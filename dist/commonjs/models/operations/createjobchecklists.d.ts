import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobChecklistsResponseResult = components.Result | components.ErrorT;
export type CreateJobChecklistsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobChecklistsResponseResult$inboundSchema: z.ZodType<CreateJobChecklistsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobChecklistsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobChecklistsResponseResult$outboundSchema: z.ZodType<CreateJobChecklistsResponseResult$Outbound, z.ZodTypeDef, CreateJobChecklistsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobChecklistsResponseResult$ {
    /** @deprecated use `CreateJobChecklistsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobChecklistsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobChecklistsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobChecklistsResponseResult$Outbound, z.ZodTypeDef, CreateJobChecklistsResponseResult>;
    /** @deprecated use `CreateJobChecklistsResponseResult$Outbound` instead. */
    type Outbound = CreateJobChecklistsResponseResult$Outbound;
}
export declare function createJobChecklistsResponseResultToJSON(createJobChecklistsResponseResult: CreateJobChecklistsResponseResult): string;
export declare function createJobChecklistsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobChecklistsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobChecklistsResponse$inboundSchema: z.ZodType<CreateJobChecklistsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobChecklistsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobChecklistsResponse$outboundSchema: z.ZodType<CreateJobChecklistsResponse$Outbound, z.ZodTypeDef, CreateJobChecklistsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobChecklistsResponse$ {
    /** @deprecated use `CreateJobChecklistsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobChecklistsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobChecklistsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobChecklistsResponse$Outbound, z.ZodTypeDef, CreateJobChecklistsResponse>;
    /** @deprecated use `CreateJobChecklistsResponse$Outbound` instead. */
    type Outbound = CreateJobChecklistsResponse$Outbound;
}
export declare function createJobChecklistsResponseToJSON(createJobChecklistsResponse: CreateJobChecklistsResponse): string;
export declare function createJobChecklistsResponseFromJSON(jsonString: string): SafeParseResult<CreateJobChecklistsResponse, SDKValidationError>;
//# sourceMappingURL=createjobchecklists.d.ts.map