import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateCategoriesRequest = {
    /**
     * UUID of the Category
     */
    uuid: string;
    /**
     * Category fields to update
     */
    category: components.CategoryInput;
};
export type UpdateCategoriesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateCategoriesRequest$inboundSchema: z.ZodType<UpdateCategoriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCategoriesRequest$Outbound = {
    uuid: string;
    Category: components.CategoryInput$Outbound;
};
/** @internal */
export declare const UpdateCategoriesRequest$outboundSchema: z.ZodType<UpdateCategoriesRequest$Outbound, z.ZodTypeDef, UpdateCategoriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateCategoriesRequest$ {
    /** @deprecated use `UpdateCategoriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateCategoriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateCategoriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateCategoriesRequest$Outbound, z.ZodTypeDef, UpdateCategoriesRequest>;
    /** @deprecated use `UpdateCategoriesRequest$Outbound` instead. */
    type Outbound = UpdateCategoriesRequest$Outbound;
}
export declare function updateCategoriesRequestToJSON(updateCategoriesRequest: UpdateCategoriesRequest): string;
export declare function updateCategoriesRequestFromJSON(jsonString: string): SafeParseResult<UpdateCategoriesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateCategoriesResponse$inboundSchema: z.ZodType<UpdateCategoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCategoriesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateCategoriesResponse$outboundSchema: z.ZodType<UpdateCategoriesResponse$Outbound, z.ZodTypeDef, UpdateCategoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateCategoriesResponse$ {
    /** @deprecated use `UpdateCategoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateCategoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateCategoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateCategoriesResponse$Outbound, z.ZodTypeDef, UpdateCategoriesResponse>;
    /** @deprecated use `UpdateCategoriesResponse$Outbound` instead. */
    type Outbound = UpdateCategoriesResponse$Outbound;
}
export declare function updateCategoriesResponseToJSON(updateCategoriesResponse: UpdateCategoriesResponse): string;
export declare function updateCategoriesResponseFromJSON(jsonString: string): SafeParseResult<UpdateCategoriesResponse, SDKValidationError>;
//# sourceMappingURL=updatecategories.d.ts.map