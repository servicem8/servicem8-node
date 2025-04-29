import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateFormFieldsRequest = {
    /**
     * UUID of the Form Field
     */
    uuid: string;
    /**
     * Form Field fields to update
     */
    formField: components.FormFieldInput;
};
export type UpdateFormFieldsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateFormFieldsRequest$inboundSchema: z.ZodType<UpdateFormFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFormFieldsRequest$Outbound = {
    uuid: string;
    FormField: components.FormFieldInput$Outbound;
};
/** @internal */
export declare const UpdateFormFieldsRequest$outboundSchema: z.ZodType<UpdateFormFieldsRequest$Outbound, z.ZodTypeDef, UpdateFormFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFormFieldsRequest$ {
    /** @deprecated use `UpdateFormFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFormFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFormFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFormFieldsRequest$Outbound, z.ZodTypeDef, UpdateFormFieldsRequest>;
    /** @deprecated use `UpdateFormFieldsRequest$Outbound` instead. */
    type Outbound = UpdateFormFieldsRequest$Outbound;
}
export declare function updateFormFieldsRequestToJSON(updateFormFieldsRequest: UpdateFormFieldsRequest): string;
export declare function updateFormFieldsRequestFromJSON(jsonString: string): SafeParseResult<UpdateFormFieldsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateFormFieldsResponse$inboundSchema: z.ZodType<UpdateFormFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFormFieldsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateFormFieldsResponse$outboundSchema: z.ZodType<UpdateFormFieldsResponse$Outbound, z.ZodTypeDef, UpdateFormFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFormFieldsResponse$ {
    /** @deprecated use `UpdateFormFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFormFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFormFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFormFieldsResponse$Outbound, z.ZodTypeDef, UpdateFormFieldsResponse>;
    /** @deprecated use `UpdateFormFieldsResponse$Outbound` instead. */
    type Outbound = UpdateFormFieldsResponse$Outbound;
}
export declare function updateFormFieldsResponseToJSON(updateFormFieldsResponse: UpdateFormFieldsResponse): string;
export declare function updateFormFieldsResponseFromJSON(jsonString: string): SafeParseResult<UpdateFormFieldsResponse, SDKValidationError>;
//# sourceMappingURL=updateformfields.d.ts.map