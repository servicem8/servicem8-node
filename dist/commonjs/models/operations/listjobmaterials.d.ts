import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobMaterialsResponse = components.ErrorT | Array<components.JobMaterial>;
/** @internal */
export declare const ListJobMaterialsResponse$inboundSchema: z.ZodType<ListJobMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobMaterialsResponse$Outbound = components.ErrorT$Outbound | Array<components.JobMaterial$Outbound>;
/** @internal */
export declare const ListJobMaterialsResponse$outboundSchema: z.ZodType<ListJobMaterialsResponse$Outbound, z.ZodTypeDef, ListJobMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobMaterialsResponse$ {
    /** @deprecated use `ListJobMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobMaterialsResponse$Outbound, z.ZodTypeDef, ListJobMaterialsResponse>;
    /** @deprecated use `ListJobMaterialsResponse$Outbound` instead. */
    type Outbound = ListJobMaterialsResponse$Outbound;
}
export declare function listJobMaterialsResponseToJSON(listJobMaterialsResponse: ListJobMaterialsResponse): string;
export declare function listJobMaterialsResponseFromJSON(jsonString: string): SafeParseResult<ListJobMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=listjobmaterials.d.ts.map