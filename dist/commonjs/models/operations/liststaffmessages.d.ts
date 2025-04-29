import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListStaffMessagesResponse = components.ErrorT | Array<components.StaffMessage>;
/** @internal */
export declare const ListStaffMessagesResponse$inboundSchema: z.ZodType<ListStaffMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListStaffMessagesResponse$Outbound = components.ErrorT$Outbound | Array<components.StaffMessage$Outbound>;
/** @internal */
export declare const ListStaffMessagesResponse$outboundSchema: z.ZodType<ListStaffMessagesResponse$Outbound, z.ZodTypeDef, ListStaffMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListStaffMessagesResponse$ {
    /** @deprecated use `ListStaffMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListStaffMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListStaffMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListStaffMessagesResponse$Outbound, z.ZodTypeDef, ListStaffMessagesResponse>;
    /** @deprecated use `ListStaffMessagesResponse$Outbound` instead. */
    type Outbound = ListStaffMessagesResponse$Outbound;
}
export declare function listStaffMessagesResponseToJSON(listStaffMessagesResponse: ListStaffMessagesResponse): string;
export declare function listStaffMessagesResponseFromJSON(jsonString: string): SafeParseResult<ListStaffMessagesResponse, SDKValidationError>;
//# sourceMappingURL=liststaffmessages.d.ts.map