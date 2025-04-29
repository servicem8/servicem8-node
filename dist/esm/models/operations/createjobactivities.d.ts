import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobActivitiesResponseResult = components.Result | components.ErrorT;
export type CreateJobActivitiesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobActivitiesResponseResult$inboundSchema: z.ZodType<CreateJobActivitiesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobActivitiesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobActivitiesResponseResult$outboundSchema: z.ZodType<CreateJobActivitiesResponseResult$Outbound, z.ZodTypeDef, CreateJobActivitiesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobActivitiesResponseResult$ {
    /** @deprecated use `CreateJobActivitiesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobActivitiesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobActivitiesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobActivitiesResponseResult$Outbound, z.ZodTypeDef, CreateJobActivitiesResponseResult>;
    /** @deprecated use `CreateJobActivitiesResponseResult$Outbound` instead. */
    type Outbound = CreateJobActivitiesResponseResult$Outbound;
}
export declare function createJobActivitiesResponseResultToJSON(createJobActivitiesResponseResult: CreateJobActivitiesResponseResult): string;
export declare function createJobActivitiesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobActivitiesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobActivitiesResponse$inboundSchema: z.ZodType<CreateJobActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobActivitiesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobActivitiesResponse$outboundSchema: z.ZodType<CreateJobActivitiesResponse$Outbound, z.ZodTypeDef, CreateJobActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobActivitiesResponse$ {
    /** @deprecated use `CreateJobActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobActivitiesResponse$Outbound, z.ZodTypeDef, CreateJobActivitiesResponse>;
    /** @deprecated use `CreateJobActivitiesResponse$Outbound` instead. */
    type Outbound = CreateJobActivitiesResponse$Outbound;
}
export declare function createJobActivitiesResponseToJSON(createJobActivitiesResponse: CreateJobActivitiesResponse): string;
export declare function createJobActivitiesResponseFromJSON(jsonString: string): SafeParseResult<CreateJobActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=createjobactivities.d.ts.map