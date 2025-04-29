import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Result = {
    errorCode?: number | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const Result$inboundSchema: z.ZodType<Result, z.ZodTypeDef, unknown>;
/** @internal */
export type Result$Outbound = {
    errorCode?: number | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const Result$outboundSchema: z.ZodType<Result$Outbound, z.ZodTypeDef, Result>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Result$ {
    /** @deprecated use `Result$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Result, z.ZodTypeDef, unknown>;
    /** @deprecated use `Result$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Result$Outbound, z.ZodTypeDef, Result>;
    /** @deprecated use `Result$Outbound` instead. */
    type Outbound = Result$Outbound;
}
export declare function resultToJSON(result: Result): string;
export declare function resultFromJSON(jsonString: string): SafeParseResult<Result, SDKValidationError>;
//# sourceMappingURL=result.d.ts.map