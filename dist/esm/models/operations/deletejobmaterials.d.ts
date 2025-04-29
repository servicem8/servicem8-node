import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobMaterialsRequest = {
    /**
     * UUID of the Job Material
     */
    uuid: string;
};
export type DeleteJobMaterialsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobMaterialsRequest$inboundSchema: z.ZodType<DeleteJobMaterialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobMaterialsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobMaterialsRequest$outboundSchema: z.ZodType<DeleteJobMaterialsRequest$Outbound, z.ZodTypeDef, DeleteJobMaterialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobMaterialsRequest$ {
    /** @deprecated use `DeleteJobMaterialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobMaterialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobMaterialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobMaterialsRequest$Outbound, z.ZodTypeDef, DeleteJobMaterialsRequest>;
    /** @deprecated use `DeleteJobMaterialsRequest$Outbound` instead. */
    type Outbound = DeleteJobMaterialsRequest$Outbound;
}
export declare function deleteJobMaterialsRequestToJSON(deleteJobMaterialsRequest: DeleteJobMaterialsRequest): string;
export declare function deleteJobMaterialsRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobMaterialsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobMaterialsResponse$inboundSchema: z.ZodType<DeleteJobMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobMaterialsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobMaterialsResponse$outboundSchema: z.ZodType<DeleteJobMaterialsResponse$Outbound, z.ZodTypeDef, DeleteJobMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobMaterialsResponse$ {
    /** @deprecated use `DeleteJobMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobMaterialsResponse$Outbound, z.ZodTypeDef, DeleteJobMaterialsResponse>;
    /** @deprecated use `DeleteJobMaterialsResponse$Outbound` instead. */
    type Outbound = DeleteJobMaterialsResponse$Outbound;
}
export declare function deleteJobMaterialsResponseToJSON(deleteJobMaterialsResponse: DeleteJobMaterialsResponse): string;
export declare function deleteJobMaterialsResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=deletejobmaterials.d.ts.map