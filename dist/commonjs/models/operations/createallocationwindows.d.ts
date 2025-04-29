import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateAllocationWindowsResponseResult = components.Result | components.ErrorT;
export type CreateAllocationWindowsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateAllocationWindowsResponseResult$inboundSchema: z.ZodType<CreateAllocationWindowsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAllocationWindowsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateAllocationWindowsResponseResult$outboundSchema: z.ZodType<CreateAllocationWindowsResponseResult$Outbound, z.ZodTypeDef, CreateAllocationWindowsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAllocationWindowsResponseResult$ {
    /** @deprecated use `CreateAllocationWindowsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAllocationWindowsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAllocationWindowsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAllocationWindowsResponseResult$Outbound, z.ZodTypeDef, CreateAllocationWindowsResponseResult>;
    /** @deprecated use `CreateAllocationWindowsResponseResult$Outbound` instead. */
    type Outbound = CreateAllocationWindowsResponseResult$Outbound;
}
export declare function createAllocationWindowsResponseResultToJSON(createAllocationWindowsResponseResult: CreateAllocationWindowsResponseResult): string;
export declare function createAllocationWindowsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateAllocationWindowsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateAllocationWindowsResponse$inboundSchema: z.ZodType<CreateAllocationWindowsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAllocationWindowsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateAllocationWindowsResponse$outboundSchema: z.ZodType<CreateAllocationWindowsResponse$Outbound, z.ZodTypeDef, CreateAllocationWindowsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAllocationWindowsResponse$ {
    /** @deprecated use `CreateAllocationWindowsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAllocationWindowsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAllocationWindowsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAllocationWindowsResponse$Outbound, z.ZodTypeDef, CreateAllocationWindowsResponse>;
    /** @deprecated use `CreateAllocationWindowsResponse$Outbound` instead. */
    type Outbound = CreateAllocationWindowsResponse$Outbound;
}
export declare function createAllocationWindowsResponseToJSON(createAllocationWindowsResponse: CreateAllocationWindowsResponse): string;
export declare function createAllocationWindowsResponseFromJSON(jsonString: string): SafeParseResult<CreateAllocationWindowsResponse, SDKValidationError>;
//# sourceMappingURL=createallocationwindows.d.ts.map