import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateCompanyContactsResponseResult = components.Result | components.ErrorT;
export type CreateCompanyContactsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateCompanyContactsResponseResult$inboundSchema: z.ZodType<CreateCompanyContactsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCompanyContactsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateCompanyContactsResponseResult$outboundSchema: z.ZodType<CreateCompanyContactsResponseResult$Outbound, z.ZodTypeDef, CreateCompanyContactsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCompanyContactsResponseResult$ {
    /** @deprecated use `CreateCompanyContactsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCompanyContactsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCompanyContactsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCompanyContactsResponseResult$Outbound, z.ZodTypeDef, CreateCompanyContactsResponseResult>;
    /** @deprecated use `CreateCompanyContactsResponseResult$Outbound` instead. */
    type Outbound = CreateCompanyContactsResponseResult$Outbound;
}
export declare function createCompanyContactsResponseResultToJSON(createCompanyContactsResponseResult: CreateCompanyContactsResponseResult): string;
export declare function createCompanyContactsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateCompanyContactsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateCompanyContactsResponse$inboundSchema: z.ZodType<CreateCompanyContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCompanyContactsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateCompanyContactsResponse$outboundSchema: z.ZodType<CreateCompanyContactsResponse$Outbound, z.ZodTypeDef, CreateCompanyContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCompanyContactsResponse$ {
    /** @deprecated use `CreateCompanyContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCompanyContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCompanyContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCompanyContactsResponse$Outbound, z.ZodTypeDef, CreateCompanyContactsResponse>;
    /** @deprecated use `CreateCompanyContactsResponse$Outbound` instead. */
    type Outbound = CreateCompanyContactsResponse$Outbound;
}
export declare function createCompanyContactsResponseToJSON(createCompanyContactsResponse: CreateCompanyContactsResponse): string;
export declare function createCompanyContactsResponseFromJSON(jsonString: string): SafeParseResult<CreateCompanyContactsResponse, SDKValidationError>;
//# sourceMappingURL=createcompanycontacts.d.ts.map