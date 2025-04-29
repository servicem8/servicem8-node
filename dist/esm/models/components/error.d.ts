import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ErrorT = {
    errorCode?: number | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown>;
/** @internal */
export type ErrorT$Outbound = {
    errorCode?: number | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const ErrorT$outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown>;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT>;
    /** @deprecated use `ErrorT$Outbound` instead. */
    type Outbound = ErrorT$Outbound;
}
export declare function errorToJSON(errorT: ErrorT): string;
export declare function errorFromJSON(jsonString: string): SafeParseResult<ErrorT, SDKValidationError>;
//# sourceMappingURL=error.d.ts.map