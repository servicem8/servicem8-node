import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteCategoriesRequest = {
    /**
     * UUID of the Category
     */
    uuid: string;
};
export type DeleteCategoriesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteCategoriesRequest$inboundSchema: z.ZodType<DeleteCategoriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteCategoriesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteCategoriesRequest$outboundSchema: z.ZodType<DeleteCategoriesRequest$Outbound, z.ZodTypeDef, DeleteCategoriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteCategoriesRequest$ {
    /** @deprecated use `DeleteCategoriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteCategoriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteCategoriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteCategoriesRequest$Outbound, z.ZodTypeDef, DeleteCategoriesRequest>;
    /** @deprecated use `DeleteCategoriesRequest$Outbound` instead. */
    type Outbound = DeleteCategoriesRequest$Outbound;
}
export declare function deleteCategoriesRequestToJSON(deleteCategoriesRequest: DeleteCategoriesRequest): string;
export declare function deleteCategoriesRequestFromJSON(jsonString: string): SafeParseResult<DeleteCategoriesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteCategoriesResponse$inboundSchema: z.ZodType<DeleteCategoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteCategoriesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteCategoriesResponse$outboundSchema: z.ZodType<DeleteCategoriesResponse$Outbound, z.ZodTypeDef, DeleteCategoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteCategoriesResponse$ {
    /** @deprecated use `DeleteCategoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteCategoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteCategoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteCategoriesResponse$Outbound, z.ZodTypeDef, DeleteCategoriesResponse>;
    /** @deprecated use `DeleteCategoriesResponse$Outbound` instead. */
    type Outbound = DeleteCategoriesResponse$Outbound;
}
export declare function deleteCategoriesResponseToJSON(deleteCategoriesResponse: DeleteCategoriesResponse): string;
export declare function deleteCategoriesResponseFromJSON(jsonString: string): SafeParseResult<DeleteCategoriesResponse, SDKValidationError>;
//# sourceMappingURL=deletecategories.d.ts.map