import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobMaterialBundlesResponse = components.ErrorT | Array<components.JobMaterialBundle>;
/** @internal */
export declare const ListJobMaterialBundlesResponse$inboundSchema: z.ZodType<ListJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobMaterialBundlesResponse$Outbound = components.ErrorT$Outbound | Array<components.JobMaterialBundle$Outbound>;
/** @internal */
export declare const ListJobMaterialBundlesResponse$outboundSchema: z.ZodType<ListJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, ListJobMaterialBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobMaterialBundlesResponse$ {
    /** @deprecated use `ListJobMaterialBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobMaterialBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, ListJobMaterialBundlesResponse>;
    /** @deprecated use `ListJobMaterialBundlesResponse$Outbound` instead. */
    type Outbound = ListJobMaterialBundlesResponse$Outbound;
}
export declare function listJobMaterialBundlesResponseToJSON(listJobMaterialBundlesResponse: ListJobMaterialBundlesResponse): string;
export declare function listJobMaterialBundlesResponseFromJSON(jsonString: string): SafeParseResult<ListJobMaterialBundlesResponse, SDKValidationError>;
//# sourceMappingURL=listjobmaterialbundles.d.ts.map