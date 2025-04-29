import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateStaffMessagesRequest = {
    /**
     * UUID of the Staff Message
     */
    uuid: string;
    /**
     * Staff Message fields to update
     */
    staffMessage: components.StaffMessageInput;
};
export type UpdateStaffMessagesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateStaffMessagesRequest$inboundSchema: z.ZodType<UpdateStaffMessagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaffMessagesRequest$Outbound = {
    uuid: string;
    StaffMessage: components.StaffMessageInput$Outbound;
};
/** @internal */
export declare const UpdateStaffMessagesRequest$outboundSchema: z.ZodType<UpdateStaffMessagesRequest$Outbound, z.ZodTypeDef, UpdateStaffMessagesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStaffMessagesRequest$ {
    /** @deprecated use `UpdateStaffMessagesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStaffMessagesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStaffMessagesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStaffMessagesRequest$Outbound, z.ZodTypeDef, UpdateStaffMessagesRequest>;
    /** @deprecated use `UpdateStaffMessagesRequest$Outbound` instead. */
    type Outbound = UpdateStaffMessagesRequest$Outbound;
}
export declare function updateStaffMessagesRequestToJSON(updateStaffMessagesRequest: UpdateStaffMessagesRequest): string;
export declare function updateStaffMessagesRequestFromJSON(jsonString: string): SafeParseResult<UpdateStaffMessagesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateStaffMessagesResponse$inboundSchema: z.ZodType<UpdateStaffMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaffMessagesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateStaffMessagesResponse$outboundSchema: z.ZodType<UpdateStaffMessagesResponse$Outbound, z.ZodTypeDef, UpdateStaffMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStaffMessagesResponse$ {
    /** @deprecated use `UpdateStaffMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStaffMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStaffMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStaffMessagesResponse$Outbound, z.ZodTypeDef, UpdateStaffMessagesResponse>;
    /** @deprecated use `UpdateStaffMessagesResponse$Outbound` instead. */
    type Outbound = UpdateStaffMessagesResponse$Outbound;
}
export declare function updateStaffMessagesResponseToJSON(updateStaffMessagesResponse: UpdateStaffMessagesResponse): string;
export declare function updateStaffMessagesResponseFromJSON(jsonString: string): SafeParseResult<UpdateStaffMessagesResponse, SDKValidationError>;
//# sourceMappingURL=updatestaffmessages.d.ts.map