import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListStaffMembersResponse = components.ErrorT | Array<components.Staff>;
/** @internal */
export declare const ListStaffMembersResponse$inboundSchema: z.ZodType<ListStaffMembersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListStaffMembersResponse$Outbound = components.ErrorT$Outbound | Array<components.Staff$Outbound>;
/** @internal */
export declare const ListStaffMembersResponse$outboundSchema: z.ZodType<ListStaffMembersResponse$Outbound, z.ZodTypeDef, ListStaffMembersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListStaffMembersResponse$ {
    /** @deprecated use `ListStaffMembersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListStaffMembersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListStaffMembersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListStaffMembersResponse$Outbound, z.ZodTypeDef, ListStaffMembersResponse>;
    /** @deprecated use `ListStaffMembersResponse$Outbound` instead. */
    type Outbound = ListStaffMembersResponse$Outbound;
}
export declare function listStaffMembersResponseToJSON(listStaffMembersResponse: ListStaffMembersResponse): string;
export declare function listStaffMembersResponseFromJSON(jsonString: string): SafeParseResult<ListStaffMembersResponse, SDKValidationError>;
//# sourceMappingURL=liststaffmembers.d.ts.map