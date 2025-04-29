import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetStaffMessagesRequest = {
    /**
     * UUID of the Staff Message
     */
    uuid: string;
};
export type GetStaffMessagesResponse = components.ErrorT | components.StaffMessage;
/** @internal */
export declare const GetStaffMessagesRequest$inboundSchema: z.ZodType<GetStaffMessagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetStaffMessagesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetStaffMessagesRequest$outboundSchema: z.ZodType<GetStaffMessagesRequest$Outbound, z.ZodTypeDef, GetStaffMessagesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetStaffMessagesRequest$ {
    /** @deprecated use `GetStaffMessagesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetStaffMessagesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetStaffMessagesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetStaffMessagesRequest$Outbound, z.ZodTypeDef, GetStaffMessagesRequest>;
    /** @deprecated use `GetStaffMessagesRequest$Outbound` instead. */
    type Outbound = GetStaffMessagesRequest$Outbound;
}
export declare function getStaffMessagesRequestToJSON(getStaffMessagesRequest: GetStaffMessagesRequest): string;
export declare function getStaffMessagesRequestFromJSON(jsonString: string): SafeParseResult<GetStaffMessagesRequest, SDKValidationError>;
/** @internal */
export declare const GetStaffMessagesResponse$inboundSchema: z.ZodType<GetStaffMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetStaffMessagesResponse$Outbound = components.ErrorT$Outbound | components.StaffMessage$Outbound;
/** @internal */
export declare const GetStaffMessagesResponse$outboundSchema: z.ZodType<GetStaffMessagesResponse$Outbound, z.ZodTypeDef, GetStaffMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetStaffMessagesResponse$ {
    /** @deprecated use `GetStaffMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetStaffMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetStaffMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetStaffMessagesResponse$Outbound, z.ZodTypeDef, GetStaffMessagesResponse>;
    /** @deprecated use `GetStaffMessagesResponse$Outbound` instead. */
    type Outbound = GetStaffMessagesResponse$Outbound;
}
export declare function getStaffMessagesResponseToJSON(getStaffMessagesResponse: GetStaffMessagesResponse): string;
export declare function getStaffMessagesResponseFromJSON(jsonString: string): SafeParseResult<GetStaffMessagesResponse, SDKValidationError>;
//# sourceMappingURL=getstaffmessages.d.ts.map