import * as z from "zod";
export type ErrorTData = {
    errorCode?: number | undefined;
    message?: string | undefined;
};
export declare class ErrorT extends Error {
    errorCode?: number | undefined;
    /** The original data that was passed to this error instance. */
    data$: ErrorTData;
    constructor(err: ErrorTData);
}
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
//# sourceMappingURL=error.d.ts.map