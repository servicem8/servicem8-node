import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateNotesResponseResult = components.Result | components.ErrorT;
export type CreateNotesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateNotesResponseResult$inboundSchema: z.ZodType<CreateNotesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateNotesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateNotesResponseResult$outboundSchema: z.ZodType<CreateNotesResponseResult$Outbound, z.ZodTypeDef, CreateNotesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateNotesResponseResult$ {
    /** @deprecated use `CreateNotesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateNotesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateNotesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateNotesResponseResult$Outbound, z.ZodTypeDef, CreateNotesResponseResult>;
    /** @deprecated use `CreateNotesResponseResult$Outbound` instead. */
    type Outbound = CreateNotesResponseResult$Outbound;
}
export declare function createNotesResponseResultToJSON(createNotesResponseResult: CreateNotesResponseResult): string;
export declare function createNotesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateNotesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateNotesResponse$inboundSchema: z.ZodType<CreateNotesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateNotesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateNotesResponse$outboundSchema: z.ZodType<CreateNotesResponse$Outbound, z.ZodTypeDef, CreateNotesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateNotesResponse$ {
    /** @deprecated use `CreateNotesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateNotesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateNotesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateNotesResponse$Outbound, z.ZodTypeDef, CreateNotesResponse>;
    /** @deprecated use `CreateNotesResponse$Outbound` instead. */
    type Outbound = CreateNotesResponse$Outbound;
}
export declare function createNotesResponseToJSON(createNotesResponse: CreateNotesResponse): string;
export declare function createNotesResponseFromJSON(jsonString: string): SafeParseResult<CreateNotesResponse, SDKValidationError>;
//# sourceMappingURL=createnotes.d.ts.map