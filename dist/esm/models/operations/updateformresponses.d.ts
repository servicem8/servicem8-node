import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateFormResponsesRequest = {
    /**
     * UUID of the Form Response
     */
    uuid: string;
    /**
     * Form Response fields to update
     */
    formResponse: components.FormResponseInput;
};
export type UpdateFormResponsesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateFormResponsesRequest$inboundSchema: z.ZodType<UpdateFormResponsesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFormResponsesRequest$Outbound = {
    uuid: string;
    FormResponse: components.FormResponseInput$Outbound;
};
/** @internal */
export declare const UpdateFormResponsesRequest$outboundSchema: z.ZodType<UpdateFormResponsesRequest$Outbound, z.ZodTypeDef, UpdateFormResponsesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFormResponsesRequest$ {
    /** @deprecated use `UpdateFormResponsesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFormResponsesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFormResponsesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFormResponsesRequest$Outbound, z.ZodTypeDef, UpdateFormResponsesRequest>;
    /** @deprecated use `UpdateFormResponsesRequest$Outbound` instead. */
    type Outbound = UpdateFormResponsesRequest$Outbound;
}
export declare function updateFormResponsesRequestToJSON(updateFormResponsesRequest: UpdateFormResponsesRequest): string;
export declare function updateFormResponsesRequestFromJSON(jsonString: string): SafeParseResult<UpdateFormResponsesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateFormResponsesResponse$inboundSchema: z.ZodType<UpdateFormResponsesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFormResponsesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateFormResponsesResponse$outboundSchema: z.ZodType<UpdateFormResponsesResponse$Outbound, z.ZodTypeDef, UpdateFormResponsesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFormResponsesResponse$ {
    /** @deprecated use `UpdateFormResponsesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFormResponsesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFormResponsesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFormResponsesResponse$Outbound, z.ZodTypeDef, UpdateFormResponsesResponse>;
    /** @deprecated use `UpdateFormResponsesResponse$Outbound` instead. */
    type Outbound = UpdateFormResponsesResponse$Outbound;
}
export declare function updateFormResponsesResponseToJSON(updateFormResponsesResponse: UpdateFormResponsesResponse): string;
export declare function updateFormResponsesResponseFromJSON(jsonString: string): SafeParseResult<UpdateFormResponsesResponse, SDKValidationError>;
//# sourceMappingURL=updateformresponses.d.ts.map