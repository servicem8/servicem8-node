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
export declare const QueueActive: {
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
export type QueueActive = ClosedEnum<typeof QueueActive>;
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const RequiresAssignment: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export type RequiresAssignment = ClosedEnum<typeof RequiresAssignment>;
export type Queue = {
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
    active?: QueueActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name?: string | undefined;
    defaultTimeframe?: number | undefined;
    subscribedStaff?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    requiresAssignment?: RequiresAssignment | undefined;
};
export type QueueInput = {
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
    active?: QueueActive | undefined;
    name?: string | undefined;
    defaultTimeframe?: number | undefined;
    subscribedStaff?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    requiresAssignment?: RequiresAssignment | undefined;
};
/** @internal */
export declare const QueueActive$inboundSchema: z.ZodNativeEnum<typeof QueueActive>;
/** @internal */
export declare const QueueActive$outboundSchema: z.ZodNativeEnum<typeof QueueActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace QueueActive$ {
    /** @deprecated use `QueueActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `QueueActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const RequiresAssignment$inboundSchema: z.ZodNativeEnum<typeof RequiresAssignment>;
/** @internal */
export declare const RequiresAssignment$outboundSchema: z.ZodNativeEnum<typeof RequiresAssignment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequiresAssignment$ {
    /** @deprecated use `RequiresAssignment$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `RequiresAssignment$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Queue$inboundSchema: z.ZodType<Queue, z.ZodTypeDef, unknown>;
/** @internal */
export type Queue$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name?: string | undefined;
    default_timeframe?: number | undefined;
    subscribed_staff?: string | undefined;
    requires_assignment?: number | undefined;
};
/** @internal */
export declare const Queue$outboundSchema: z.ZodType<Queue$Outbound, z.ZodTypeDef, Queue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Queue$ {
    /** @deprecated use `Queue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Queue, z.ZodTypeDef, unknown>;
    /** @deprecated use `Queue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Queue$Outbound, z.ZodTypeDef, Queue>;
    /** @deprecated use `Queue$Outbound` instead. */
    type Outbound = Queue$Outbound;
}
export declare function queueToJSON(queue: Queue): string;
export declare function queueFromJSON(jsonString: string): SafeParseResult<Queue, SDKValidationError>;
/** @internal */
export declare const QueueInput$inboundSchema: z.ZodType<QueueInput, z.ZodTypeDef, unknown>;
/** @internal */
export type QueueInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name?: string | undefined;
    default_timeframe?: number | undefined;
    subscribed_staff?: string | undefined;
    requires_assignment?: number | undefined;
};
/** @internal */
export declare const QueueInput$outboundSchema: z.ZodType<QueueInput$Outbound, z.ZodTypeDef, QueueInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace QueueInput$ {
    /** @deprecated use `QueueInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<QueueInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `QueueInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<QueueInput$Outbound, z.ZodTypeDef, QueueInput>;
    /** @deprecated use `QueueInput$Outbound` instead. */
    type Outbound = QueueInput$Outbound;
}
export declare function queueInputToJSON(queueInput: QueueInput): string;
export declare function queueInputFromJSON(jsonString: string): SafeParseResult<QueueInput, SDKValidationError>;
//# sourceMappingURL=queue.d.ts.map