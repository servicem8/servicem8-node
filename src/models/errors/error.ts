/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ErrorTData = {
  errorCode?: number | undefined;
  message?: string | undefined;
};

export class ErrorT extends Error {
  errorCode?: number | undefined;

  /** The original data that was passed to this error instance. */
  data$: ErrorTData;

  constructor(err: ErrorTData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errorCode != null) this.errorCode = err.errorCode;

    this.name = "ErrorT";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    errorCode: z.number().optional(),
    message: z.string().optional(),
  })
  .transform((v) => {
    return new ErrorT(v);
  });

/** @internal */
export type ErrorT$Outbound = {
  errorCode?: number | undefined;
  message?: string | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.instanceof(ErrorT)
  .transform(v => v.data$)
  .pipe(z.object({
    errorCode: z.number().optional(),
    message: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}
