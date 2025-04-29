import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetFormsRequest = {
    /**
     * UUID of the Form
     */
    uuid: string;
};
export type GetFormsResponse = components.ErrorT | components.Form;
/** @internal */
export declare const GetFormsRequest$inboundSchema: z.ZodType<GetFormsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFormsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetFormsRequest$outboundSchema: z.ZodType<GetFormsRequest$Outbound, z.ZodTypeDef, GetFormsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFormsRequest$ {
    /** @deprecated use `GetFormsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFormsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFormsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFormsRequest$Outbound, z.ZodTypeDef, GetFormsRequest>;
    /** @deprecated use `GetFormsRequest$Outbound` instead. */
    type Outbound = GetFormsRequest$Outbound;
}
export declare function getFormsRequestToJSON(getFormsRequest: GetFormsRequest): string;
export declare function getFormsRequestFromJSON(jsonString: string): SafeParseResult<GetFormsRequest, SDKValidationError>;
/** @internal */
export declare const GetFormsResponse$inboundSchema: z.ZodType<GetFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFormsResponse$Outbound = components.ErrorT$Outbound | components.Form$Outbound;
/** @internal */
export declare const GetFormsResponse$outboundSchema: z.ZodType<GetFormsResponse$Outbound, z.ZodTypeDef, GetFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFormsResponse$ {
    /** @deprecated use `GetFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFormsResponse$Outbound, z.ZodTypeDef, GetFormsResponse>;
    /** @deprecated use `GetFormsResponse$Outbound` instead. */
    type Outbound = GetFormsResponse$Outbound;
}
export declare function getFormsResponseToJSON(getFormsResponse: GetFormsResponse): string;
export declare function getFormsResponseFromJSON(jsonString: string): SafeParseResult<GetFormsResponse, SDKValidationError>;
//# sourceMappingURL=getforms.d.ts.map