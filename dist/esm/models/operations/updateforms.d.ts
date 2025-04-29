import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateFormsRequest = {
    /**
     * UUID of the Form
     */
    uuid: string;
    /**
     * Form fields to update
     */
    form: components.FormInput;
};
export type UpdateFormsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateFormsRequest$inboundSchema: z.ZodType<UpdateFormsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFormsRequest$Outbound = {
    uuid: string;
    Form: components.FormInput$Outbound;
};
/** @internal */
export declare const UpdateFormsRequest$outboundSchema: z.ZodType<UpdateFormsRequest$Outbound, z.ZodTypeDef, UpdateFormsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFormsRequest$ {
    /** @deprecated use `UpdateFormsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFormsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFormsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFormsRequest$Outbound, z.ZodTypeDef, UpdateFormsRequest>;
    /** @deprecated use `UpdateFormsRequest$Outbound` instead. */
    type Outbound = UpdateFormsRequest$Outbound;
}
export declare function updateFormsRequestToJSON(updateFormsRequest: UpdateFormsRequest): string;
export declare function updateFormsRequestFromJSON(jsonString: string): SafeParseResult<UpdateFormsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateFormsResponse$inboundSchema: z.ZodType<UpdateFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFormsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateFormsResponse$outboundSchema: z.ZodType<UpdateFormsResponse$Outbound, z.ZodTypeDef, UpdateFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFormsResponse$ {
    /** @deprecated use `UpdateFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFormsResponse$Outbound, z.ZodTypeDef, UpdateFormsResponse>;
    /** @deprecated use `UpdateFormsResponse$Outbound` instead. */
    type Outbound = UpdateFormsResponse$Outbound;
}
export declare function updateFormsResponseToJSON(updateFormsResponse: UpdateFormsResponse): string;
export declare function updateFormsResponseFromJSON(jsonString: string): SafeParseResult<UpdateFormsResponse, SDKValidationError>;
//# sourceMappingURL=updateforms.d.ts.map