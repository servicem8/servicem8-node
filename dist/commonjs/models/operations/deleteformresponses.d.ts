import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteFormResponsesRequest = {
    /**
     * UUID of the Form Response
     */
    uuid: string;
};
export type DeleteFormResponsesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteFormResponsesRequest$inboundSchema: z.ZodType<DeleteFormResponsesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFormResponsesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteFormResponsesRequest$outboundSchema: z.ZodType<DeleteFormResponsesRequest$Outbound, z.ZodTypeDef, DeleteFormResponsesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFormResponsesRequest$ {
    /** @deprecated use `DeleteFormResponsesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFormResponsesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFormResponsesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFormResponsesRequest$Outbound, z.ZodTypeDef, DeleteFormResponsesRequest>;
    /** @deprecated use `DeleteFormResponsesRequest$Outbound` instead. */
    type Outbound = DeleteFormResponsesRequest$Outbound;
}
export declare function deleteFormResponsesRequestToJSON(deleteFormResponsesRequest: DeleteFormResponsesRequest): string;
export declare function deleteFormResponsesRequestFromJSON(jsonString: string): SafeParseResult<DeleteFormResponsesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteFormResponsesResponse$inboundSchema: z.ZodType<DeleteFormResponsesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFormResponsesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteFormResponsesResponse$outboundSchema: z.ZodType<DeleteFormResponsesResponse$Outbound, z.ZodTypeDef, DeleteFormResponsesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFormResponsesResponse$ {
    /** @deprecated use `DeleteFormResponsesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFormResponsesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFormResponsesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFormResponsesResponse$Outbound, z.ZodTypeDef, DeleteFormResponsesResponse>;
    /** @deprecated use `DeleteFormResponsesResponse$Outbound` instead. */
    type Outbound = DeleteFormResponsesResponse$Outbound;
}
export declare function deleteFormResponsesResponseToJSON(deleteFormResponsesResponse: DeleteFormResponsesResponse): string;
export declare function deleteFormResponsesResponseFromJSON(jsonString: string): SafeParseResult<DeleteFormResponsesResponse, SDKValidationError>;
//# sourceMappingURL=deleteformresponses.d.ts.map