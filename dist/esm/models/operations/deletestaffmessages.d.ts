import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteStaffMessagesRequest = {
    /**
     * UUID of the Staff Message
     */
    uuid: string;
};
export type DeleteStaffMessagesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteStaffMessagesRequest$inboundSchema: z.ZodType<DeleteStaffMessagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteStaffMessagesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteStaffMessagesRequest$outboundSchema: z.ZodType<DeleteStaffMessagesRequest$Outbound, z.ZodTypeDef, DeleteStaffMessagesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteStaffMessagesRequest$ {
    /** @deprecated use `DeleteStaffMessagesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteStaffMessagesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteStaffMessagesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteStaffMessagesRequest$Outbound, z.ZodTypeDef, DeleteStaffMessagesRequest>;
    /** @deprecated use `DeleteStaffMessagesRequest$Outbound` instead. */
    type Outbound = DeleteStaffMessagesRequest$Outbound;
}
export declare function deleteStaffMessagesRequestToJSON(deleteStaffMessagesRequest: DeleteStaffMessagesRequest): string;
export declare function deleteStaffMessagesRequestFromJSON(jsonString: string): SafeParseResult<DeleteStaffMessagesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteStaffMessagesResponse$inboundSchema: z.ZodType<DeleteStaffMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteStaffMessagesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteStaffMessagesResponse$outboundSchema: z.ZodType<DeleteStaffMessagesResponse$Outbound, z.ZodTypeDef, DeleteStaffMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteStaffMessagesResponse$ {
    /** @deprecated use `DeleteStaffMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteStaffMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteStaffMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteStaffMessagesResponse$Outbound, z.ZodTypeDef, DeleteStaffMessagesResponse>;
    /** @deprecated use `DeleteStaffMessagesResponse$Outbound` instead. */
    type Outbound = DeleteStaffMessagesResponse$Outbound;
}
export declare function deleteStaffMessagesResponseToJSON(deleteStaffMessagesResponse: DeleteStaffMessagesResponse): string;
export declare function deleteStaffMessagesResponseFromJSON(jsonString: string): SafeParseResult<DeleteStaffMessagesResponse, SDKValidationError>;
//# sourceMappingURL=deletestaffmessages.d.ts.map