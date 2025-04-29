import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListCompanyContactsResponse = components.ErrorT | Array<components.CompanyContact>;
/** @internal */
export declare const ListCompanyContactsResponse$inboundSchema: z.ZodType<ListCompanyContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCompanyContactsResponse$Outbound = components.ErrorT$Outbound | Array<components.CompanyContact$Outbound>;
/** @internal */
export declare const ListCompanyContactsResponse$outboundSchema: z.ZodType<ListCompanyContactsResponse$Outbound, z.ZodTypeDef, ListCompanyContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListCompanyContactsResponse$ {
    /** @deprecated use `ListCompanyContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListCompanyContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListCompanyContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListCompanyContactsResponse$Outbound, z.ZodTypeDef, ListCompanyContactsResponse>;
    /** @deprecated use `ListCompanyContactsResponse$Outbound` instead. */
    type Outbound = ListCompanyContactsResponse$Outbound;
}
export declare function listCompanyContactsResponseToJSON(listCompanyContactsResponse: ListCompanyContactsResponse): string;
export declare function listCompanyContactsResponseFromJSON(jsonString: string): SafeParseResult<ListCompanyContactsResponse, SDKValidationError>;
//# sourceMappingURL=listcompanycontacts.d.ts.map