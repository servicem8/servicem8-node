import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCategoriesRequest = {
    /**
     * UUID of the Category
     */
    uuid: string;
};
export type GetCategoriesResponse = components.ErrorT | components.Category;
/** @internal */
export declare const GetCategoriesRequest$inboundSchema: z.ZodType<GetCategoriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCategoriesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetCategoriesRequest$outboundSchema: z.ZodType<GetCategoriesRequest$Outbound, z.ZodTypeDef, GetCategoriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCategoriesRequest$ {
    /** @deprecated use `GetCategoriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCategoriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCategoriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCategoriesRequest$Outbound, z.ZodTypeDef, GetCategoriesRequest>;
    /** @deprecated use `GetCategoriesRequest$Outbound` instead. */
    type Outbound = GetCategoriesRequest$Outbound;
}
export declare function getCategoriesRequestToJSON(getCategoriesRequest: GetCategoriesRequest): string;
export declare function getCategoriesRequestFromJSON(jsonString: string): SafeParseResult<GetCategoriesRequest, SDKValidationError>;
/** @internal */
export declare const GetCategoriesResponse$inboundSchema: z.ZodType<GetCategoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCategoriesResponse$Outbound = components.ErrorT$Outbound | components.Category$Outbound;
/** @internal */
export declare const GetCategoriesResponse$outboundSchema: z.ZodType<GetCategoriesResponse$Outbound, z.ZodTypeDef, GetCategoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCategoriesResponse$ {
    /** @deprecated use `GetCategoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCategoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCategoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCategoriesResponse$Outbound, z.ZodTypeDef, GetCategoriesResponse>;
    /** @deprecated use `GetCategoriesResponse$Outbound` instead. */
    type Outbound = GetCategoriesResponse$Outbound;
}
export declare function getCategoriesResponseToJSON(getCategoriesResponse: GetCategoriesResponse): string;
export declare function getCategoriesResponseFromJSON(jsonString: string): SafeParseResult<GetCategoriesResponse, SDKValidationError>;
//# sourceMappingURL=getcategories.d.ts.map