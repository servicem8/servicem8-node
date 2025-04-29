import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteFormsRequest = {
    /**
     * UUID of the Form
     */
    uuid: string;
};
export type DeleteFormsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteFormsRequest$inboundSchema: z.ZodType<DeleteFormsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFormsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteFormsRequest$outboundSchema: z.ZodType<DeleteFormsRequest$Outbound, z.ZodTypeDef, DeleteFormsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFormsRequest$ {
    /** @deprecated use `DeleteFormsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFormsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFormsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFormsRequest$Outbound, z.ZodTypeDef, DeleteFormsRequest>;
    /** @deprecated use `DeleteFormsRequest$Outbound` instead. */
    type Outbound = DeleteFormsRequest$Outbound;
}
export declare function deleteFormsRequestToJSON(deleteFormsRequest: DeleteFormsRequest): string;
export declare function deleteFormsRequestFromJSON(jsonString: string): SafeParseResult<DeleteFormsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteFormsResponse$inboundSchema: z.ZodType<DeleteFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFormsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteFormsResponse$outboundSchema: z.ZodType<DeleteFormsResponse$Outbound, z.ZodTypeDef, DeleteFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFormsResponse$ {
    /** @deprecated use `DeleteFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFormsResponse$Outbound, z.ZodTypeDef, DeleteFormsResponse>;
    /** @deprecated use `DeleteFormsResponse$Outbound` instead. */
    type Outbound = DeleteFormsResponse$Outbound;
}
export declare function deleteFormsResponseToJSON(deleteFormsResponse: DeleteFormsResponse): string;
export declare function deleteFormsResponseFromJSON(jsonString: string): SafeParseResult<DeleteFormsResponse, SDKValidationError>;
//# sourceMappingURL=deleteforms.d.ts.map