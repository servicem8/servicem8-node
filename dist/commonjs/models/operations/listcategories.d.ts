import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListCategoriesResponse = components.ErrorT | Array<components.Category>;
/** @internal */
export declare const ListCategoriesResponse$inboundSchema: z.ZodType<ListCategoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCategoriesResponse$Outbound = components.ErrorT$Outbound | Array<components.Category$Outbound>;
/** @internal */
export declare const ListCategoriesResponse$outboundSchema: z.ZodType<ListCategoriesResponse$Outbound, z.ZodTypeDef, ListCategoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListCategoriesResponse$ {
    /** @deprecated use `ListCategoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListCategoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListCategoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListCategoriesResponse$Outbound, z.ZodTypeDef, ListCategoriesResponse>;
    /** @deprecated use `ListCategoriesResponse$Outbound` instead. */
    type Outbound = ListCategoriesResponse$Outbound;
}
export declare function listCategoriesResponseToJSON(listCategoriesResponse: ListCategoriesResponse): string;
export declare function listCategoriesResponseFromJSON(jsonString: string): SafeParseResult<ListCategoriesResponse, SDKValidationError>;
//# sourceMappingURL=listcategories.d.ts.map