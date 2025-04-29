import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const AllocationWindowActive: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type AllocationWindowActive = ClosedEnum<typeof AllocationWindowActive>;
export type AllocationWindow = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: AllocationWindowActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name?: string | undefined;
    startTime?: number | undefined;
    endTime?: number | undefined;
    sortPriority?: number | undefined;
};
export type AllocationWindowInput = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: AllocationWindowActive | undefined;
    name?: string | undefined;
    startTime?: number | undefined;
    endTime?: number | undefined;
    sortPriority?: number | undefined;
};
/** @internal */
export declare const AllocationWindowActive$inboundSchema: z.ZodNativeEnum<typeof AllocationWindowActive>;
/** @internal */
export declare const AllocationWindowActive$outboundSchema: z.ZodNativeEnum<typeof AllocationWindowActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AllocationWindowActive$ {
    /** @deprecated use `AllocationWindowActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `AllocationWindowActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const AllocationWindow$inboundSchema: z.ZodType<AllocationWindow, z.ZodTypeDef, unknown>;
/** @internal */
export type AllocationWindow$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name?: string | undefined;
    start_time?: number | undefined;
    end_time?: number | undefined;
    sort_priority?: number | undefined;
};
/** @internal */
export declare const AllocationWindow$outboundSchema: z.ZodType<AllocationWindow$Outbound, z.ZodTypeDef, AllocationWindow>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AllocationWindow$ {
    /** @deprecated use `AllocationWindow$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AllocationWindow, z.ZodTypeDef, unknown>;
    /** @deprecated use `AllocationWindow$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AllocationWindow$Outbound, z.ZodTypeDef, AllocationWindow>;
    /** @deprecated use `AllocationWindow$Outbound` instead. */
    type Outbound = AllocationWindow$Outbound;
}
export declare function allocationWindowToJSON(allocationWindow: AllocationWindow): string;
export declare function allocationWindowFromJSON(jsonString: string): SafeParseResult<AllocationWindow, SDKValidationError>;
/** @internal */
export declare const AllocationWindowInput$inboundSchema: z.ZodType<AllocationWindowInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AllocationWindowInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name?: string | undefined;
    start_time?: number | undefined;
    end_time?: number | undefined;
    sort_priority?: number | undefined;
};
/** @internal */
export declare const AllocationWindowInput$outboundSchema: z.ZodType<AllocationWindowInput$Outbound, z.ZodTypeDef, AllocationWindowInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AllocationWindowInput$ {
    /** @deprecated use `AllocationWindowInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AllocationWindowInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AllocationWindowInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AllocationWindowInput$Outbound, z.ZodTypeDef, AllocationWindowInput>;
    /** @deprecated use `AllocationWindowInput$Outbound` instead. */
    type Outbound = AllocationWindowInput$Outbound;
}
export declare function allocationWindowInputToJSON(allocationWindowInput: AllocationWindowInput): string;
export declare function allocationWindowInputFromJSON(jsonString: string): SafeParseResult<AllocationWindowInput, SDKValidationError>;
//# sourceMappingURL=allocationwindow.d.ts.map