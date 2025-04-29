import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateBadgesResponseResult = components.Result | components.ErrorT;
export type CreateBadgesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateBadgesResponseResult$inboundSchema: z.ZodType<CreateBadgesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateBadgesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateBadgesResponseResult$outboundSchema: z.ZodType<CreateBadgesResponseResult$Outbound, z.ZodTypeDef, CreateBadgesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateBadgesResponseResult$ {
    /** @deprecated use `CreateBadgesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateBadgesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateBadgesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateBadgesResponseResult$Outbound, z.ZodTypeDef, CreateBadgesResponseResult>;
    /** @deprecated use `CreateBadgesResponseResult$Outbound` instead. */
    type Outbound = CreateBadgesResponseResult$Outbound;
}
export declare function createBadgesResponseResultToJSON(createBadgesResponseResult: CreateBadgesResponseResult): string;
export declare function createBadgesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateBadgesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateBadgesResponse$inboundSchema: z.ZodType<CreateBadgesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateBadgesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateBadgesResponse$outboundSchema: z.ZodType<CreateBadgesResponse$Outbound, z.ZodTypeDef, CreateBadgesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateBadgesResponse$ {
    /** @deprecated use `CreateBadgesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateBadgesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateBadgesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateBadgesResponse$Outbound, z.ZodTypeDef, CreateBadgesResponse>;
    /** @deprecated use `CreateBadgesResponse$Outbound` instead. */
    type Outbound = CreateBadgesResponse$Outbound;
}
export declare function createBadgesResponseToJSON(createBadgesResponse: CreateBadgesResponse): string;
export declare function createBadgesResponseFromJSON(jsonString: string): SafeParseResult<CreateBadgesResponse, SDKValidationError>;
//# sourceMappingURL=createbadges.d.ts.map