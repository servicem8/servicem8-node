import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListClientsResponse = components.ErrorT | Array<components.Company>;
/** @internal */
export declare const ListClientsResponse$inboundSchema: z.ZodType<ListClientsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListClientsResponse$Outbound = components.ErrorT$Outbound | Array<components.Company$Outbound>;
/** @internal */
export declare const ListClientsResponse$outboundSchema: z.ZodType<ListClientsResponse$Outbound, z.ZodTypeDef, ListClientsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListClientsResponse$ {
    /** @deprecated use `ListClientsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListClientsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListClientsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListClientsResponse$Outbound, z.ZodTypeDef, ListClientsResponse>;
    /** @deprecated use `ListClientsResponse$Outbound` instead. */
    type Outbound = ListClientsResponse$Outbound;
}
export declare function listClientsResponseToJSON(listClientsResponse: ListClientsResponse): string;
export declare function listClientsResponseFromJSON(jsonString: string): SafeParseResult<ListClientsResponse, SDKValidationError>;
//# sourceMappingURL=listclients.d.ts.map