import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListLocationsResponse = components.ErrorT | Array<components.Location>;
/** @internal */
export declare const ListLocationsResponse$inboundSchema: z.ZodType<ListLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListLocationsResponse$Outbound = components.ErrorT$Outbound | Array<components.Location$Outbound>;
/** @internal */
export declare const ListLocationsResponse$outboundSchema: z.ZodType<ListLocationsResponse$Outbound, z.ZodTypeDef, ListLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListLocationsResponse$ {
    /** @deprecated use `ListLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListLocationsResponse$Outbound, z.ZodTypeDef, ListLocationsResponse>;
    /** @deprecated use `ListLocationsResponse$Outbound` instead. */
    type Outbound = ListLocationsResponse$Outbound;
}
export declare function listLocationsResponseToJSON(listLocationsResponse: ListLocationsResponse): string;
export declare function listLocationsResponseFromJSON(jsonString: string): SafeParseResult<ListLocationsResponse, SDKValidationError>;
//# sourceMappingURL=listlocations.d.ts.map