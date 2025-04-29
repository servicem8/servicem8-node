import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListMaterialsResponse = components.ErrorT | Array<components.Material>;
/** @internal */
export declare const ListMaterialsResponse$inboundSchema: z.ZodType<ListMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListMaterialsResponse$Outbound = components.ErrorT$Outbound | Array<components.Material$Outbound>;
/** @internal */
export declare const ListMaterialsResponse$outboundSchema: z.ZodType<ListMaterialsResponse$Outbound, z.ZodTypeDef, ListMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListMaterialsResponse$ {
    /** @deprecated use `ListMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListMaterialsResponse$Outbound, z.ZodTypeDef, ListMaterialsResponse>;
    /** @deprecated use `ListMaterialsResponse$Outbound` instead. */
    type Outbound = ListMaterialsResponse$Outbound;
}
export declare function listMaterialsResponseToJSON(listMaterialsResponse: ListMaterialsResponse): string;
export declare function listMaterialsResponseFromJSON(jsonString: string): SafeParseResult<ListMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=listmaterials.d.ts.map