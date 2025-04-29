import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteFormFieldsRequest = {
    /**
     * UUID of the Form Field
     */
    uuid: string;
};
export type DeleteFormFieldsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteFormFieldsRequest$inboundSchema: z.ZodType<DeleteFormFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFormFieldsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteFormFieldsRequest$outboundSchema: z.ZodType<DeleteFormFieldsRequest$Outbound, z.ZodTypeDef, DeleteFormFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFormFieldsRequest$ {
    /** @deprecated use `DeleteFormFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFormFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFormFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFormFieldsRequest$Outbound, z.ZodTypeDef, DeleteFormFieldsRequest>;
    /** @deprecated use `DeleteFormFieldsRequest$Outbound` instead. */
    type Outbound = DeleteFormFieldsRequest$Outbound;
}
export declare function deleteFormFieldsRequestToJSON(deleteFormFieldsRequest: DeleteFormFieldsRequest): string;
export declare function deleteFormFieldsRequestFromJSON(jsonString: string): SafeParseResult<DeleteFormFieldsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteFormFieldsResponse$inboundSchema: z.ZodType<DeleteFormFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFormFieldsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteFormFieldsResponse$outboundSchema: z.ZodType<DeleteFormFieldsResponse$Outbound, z.ZodTypeDef, DeleteFormFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFormFieldsResponse$ {
    /** @deprecated use `DeleteFormFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFormFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFormFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFormFieldsResponse$Outbound, z.ZodTypeDef, DeleteFormFieldsResponse>;
    /** @deprecated use `DeleteFormFieldsResponse$Outbound` instead. */
    type Outbound = DeleteFormFieldsResponse$Outbound;
}
export declare function deleteFormFieldsResponseToJSON(deleteFormFieldsResponse: DeleteFormFieldsResponse): string;
export declare function deleteFormFieldsResponseFromJSON(jsonString: string): SafeParseResult<DeleteFormFieldsResponse, SDKValidationError>;
//# sourceMappingURL=deleteformfields.d.ts.map