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
export declare const LocationActive: {
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
export type LocationActive = ClosedEnum<typeof LocationActive>;
export type Location = {
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
    active?: LocationActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * Location's name
     */
    name: string;
    line1?: string | undefined;
    line2?: string | undefined;
    line3?: string | undefined;
    /**
     * Email Address
     */
    city?: string | undefined;
    /**
     * Email Address
     */
    country?: string | undefined;
    /**
     * Email Address
     */
    postCode?: string | undefined;
    phone1?: string | undefined;
    /**
     * Address State
     */
    state?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
};
export type LocationInput = {
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
    active?: LocationActive | undefined;
    /**
     * Location's name
     */
    name: string;
    line1?: string | undefined;
    line2?: string | undefined;
    line3?: string | undefined;
    /**
     * Email Address
     */
    city?: string | undefined;
    /**
     * Email Address
     */
    country?: string | undefined;
    /**
     * Email Address
     */
    postCode?: string | undefined;
    phone1?: string | undefined;
    /**
     * Address State
     */
    state?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
};
/** @internal */
export declare const LocationActive$inboundSchema: z.ZodNativeEnum<typeof LocationActive>;
/** @internal */
export declare const LocationActive$outboundSchema: z.ZodNativeEnum<typeof LocationActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LocationActive$ {
    /** @deprecated use `LocationActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `LocationActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Location$inboundSchema: z.ZodType<Location, z.ZodTypeDef, unknown>;
/** @internal */
export type Location$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    line1?: string | undefined;
    line2?: string | undefined;
    line3?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    post_code?: string | undefined;
    phone_1?: string | undefined;
    state?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
};
/** @internal */
export declare const Location$outboundSchema: z.ZodType<Location$Outbound, z.ZodTypeDef, Location>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Location$ {
    /** @deprecated use `Location$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Location, z.ZodTypeDef, unknown>;
    /** @deprecated use `Location$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Location$Outbound, z.ZodTypeDef, Location>;
    /** @deprecated use `Location$Outbound` instead. */
    type Outbound = Location$Outbound;
}
export declare function locationToJSON(location: Location): string;
export declare function locationFromJSON(jsonString: string): SafeParseResult<Location, SDKValidationError>;
/** @internal */
export declare const LocationInput$inboundSchema: z.ZodType<LocationInput, z.ZodTypeDef, unknown>;
/** @internal */
export type LocationInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    line1?: string | undefined;
    line2?: string | undefined;
    line3?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    post_code?: string | undefined;
    phone_1?: string | undefined;
    state?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
};
/** @internal */
export declare const LocationInput$outboundSchema: z.ZodType<LocationInput$Outbound, z.ZodTypeDef, LocationInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LocationInput$ {
    /** @deprecated use `LocationInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LocationInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `LocationInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LocationInput$Outbound, z.ZodTypeDef, LocationInput>;
    /** @deprecated use `LocationInput$Outbound` instead. */
    type Outbound = LocationInput$Outbound;
}
export declare function locationInputToJSON(locationInput: LocationInput): string;
export declare function locationInputFromJSON(jsonString: string): SafeParseResult<LocationInput, SDKValidationError>;
//# sourceMappingURL=location.d.ts.map