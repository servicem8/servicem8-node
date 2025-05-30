/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Boolean flag controlling whether this staff member appears in the schedule view. When true (1), the staff member is hidden from the schedule. When false (0), they appear normally in scheduling interfaces..  Valid values are [0,1]
 */
export const HideFromSchedule = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Boolean flag controlling whether this staff member appears in the schedule view. When true (1), the staff member is hidden from the schedule. When false (0), they appear normally in scheduling interfaces..  Valid values are [0,1]
 */
export type HideFromSchedule = ClosedEnum<typeof HideFromSchedule>;

/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export const StaffActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type StaffActive = ClosedEnum<typeof StaffActive>;

export type Staff = {
  /**
   * Staff First Name
   */
  first: string;
  /**
   * Staff Last Name
   */
  last: string;
  /**
   * Staff Email Address. This is also your login name.
   */
  email: string;
  /**
   * Mobile phone number of the staff member. Used for SMS communications and identification when calling.
   */
  mobile?: string | undefined;
  /**
   * Longitude coordinate of the staff member's current or last known location. Used for tracking staff locations and calculating routes and travel distances.
   */
  lng?: number | undefined;
  /**
   * Latitude coordinate of the staff member's current or last known location. Used for tracking staff locations and calculating routes and travel distances.
   */
  lat?: number | undefined;
  /**
   * The date and time when the staff member's geographic location (lat/lng) was last updated. Format is YYYY-MM-DD HH:MM:SS. Used to determine how recent the location data is.
   */
  geoTimestamp?: string | undefined;
  /**
   * The staff member's job title or role within the organization. Used for organizational purposes and displayed in various places throughout the system.
   */
  jobTitle?: string | undefined;
  /**
   * UUID of the job the staff member is currently navigating to. Used to track which job a staff member is traveling toward.
   */
  navigatingToJobUuid?: string | undefined;
  /**
   * The date and time when the staff member started navigating to a job. Format is YYYY-MM-DD HH:MM:SS. Used to track when navigation began.
   */
  navigatingTimestamp?: string | undefined;
  /**
   * The date and time when navigation to a job is expected to complete or expire. Format is YYYY-MM-DD HH:MM:SS. Used to determine if navigation is still active.
   */
  navigatingExpiryTimestamp?: string | undefined;
  /**
   * The color assigned to this staff member, represented as a hex color code. Used for visual identification in the schedule, dispatch board, and other interfaces.
   */
  color?: string | undefined;
  /**
   * DEPRECATED
   */
  customIconUrl?: any | undefined;
  /**
   * Short message summarising the staff's current status.
   */
  statusMessage?: string | undefined;
  /**
   * The date and time when the staff member's status message was last updated. Format is YYYY-MM-DD HH:MM:SS. Used to determine how recent the status message is.
   */
  statusMessageTimestamp?: string | undefined;
  /**
   * Boolean flag controlling whether this staff member appears in the schedule view. When true (1), the staff member is hidden from the schedule. When false (0), they appear normally in scheduling interfaces..  Valid values are [0,1]
   */
  hideFromSchedule?: HideFromSchedule | undefined;
  /**
   * UUID of the primary security role assigned to this staff member. Controls the staff member's permissions and access levels throughout the system.
   */
  securityRoleUuid?: string | undefined;
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: StaffActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  canReceivePushNotification?: string | undefined;
};

export type StaffInput = {
  /**
   * Staff First Name
   */
  first: string;
  /**
   * Staff Last Name
   */
  last: string;
  /**
   * Staff Email Address. This is also your login name.
   */
  email: string;
  /**
   * Mobile phone number of the staff member. Used for SMS communications and identification when calling.
   */
  mobile?: string | undefined;
  /**
   * Longitude coordinate of the staff member's current or last known location. Used for tracking staff locations and calculating routes and travel distances.
   */
  lng?: number | undefined;
  /**
   * Latitude coordinate of the staff member's current or last known location. Used for tracking staff locations and calculating routes and travel distances.
   */
  lat?: number | undefined;
  /**
   * The date and time when the staff member's geographic location (lat/lng) was last updated. Format is YYYY-MM-DD HH:MM:SS. Used to determine how recent the location data is.
   */
  geoTimestamp?: string | undefined;
  /**
   * The staff member's job title or role within the organization. Used for organizational purposes and displayed in various places throughout the system.
   */
  jobTitle?: string | undefined;
  /**
   * UUID of the job the staff member is currently navigating to. Used to track which job a staff member is traveling toward.
   */
  navigatingToJobUuid?: string | undefined;
  /**
   * The date and time when the staff member started navigating to a job. Format is YYYY-MM-DD HH:MM:SS. Used to track when navigation began.
   */
  navigatingTimestamp?: string | undefined;
  /**
   * The date and time when navigation to a job is expected to complete or expire. Format is YYYY-MM-DD HH:MM:SS. Used to determine if navigation is still active.
   */
  navigatingExpiryTimestamp?: string | undefined;
  /**
   * The color assigned to this staff member, represented as a hex color code. Used for visual identification in the schedule, dispatch board, and other interfaces.
   */
  color?: string | undefined;
  /**
   * DEPRECATED
   */
  customIconUrl?: any | undefined;
  /**
   * Short message summarising the staff's current status.
   */
  statusMessage?: string | undefined;
  /**
   * The date and time when the staff member's status message was last updated. Format is YYYY-MM-DD HH:MM:SS. Used to determine how recent the status message is.
   */
  statusMessageTimestamp?: string | undefined;
  /**
   * Boolean flag controlling whether this staff member appears in the schedule view. When true (1), the staff member is hidden from the schedule. When false (0), they appear normally in scheduling interfaces..  Valid values are [0,1]
   */
  hideFromSchedule?: HideFromSchedule | undefined;
  /**
   * UUID of the primary security role assigned to this staff member. Controls the staff member's permissions and access levels throughout the system.
   */
  securityRoleUuid?: string | undefined;
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: StaffActive | undefined;
  canReceivePushNotification?: string | undefined;
};

/** @internal */
export const HideFromSchedule$inboundSchema: z.ZodNativeEnum<
  typeof HideFromSchedule
> = z.nativeEnum(HideFromSchedule);

/** @internal */
export const HideFromSchedule$outboundSchema: z.ZodNativeEnum<
  typeof HideFromSchedule
> = HideFromSchedule$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HideFromSchedule$ {
  /** @deprecated use `HideFromSchedule$inboundSchema` instead. */
  export const inboundSchema = HideFromSchedule$inboundSchema;
  /** @deprecated use `HideFromSchedule$outboundSchema` instead. */
  export const outboundSchema = HideFromSchedule$outboundSchema;
}

/** @internal */
export const StaffActive$inboundSchema: z.ZodNativeEnum<typeof StaffActive> = z
  .nativeEnum(StaffActive);

/** @internal */
export const StaffActive$outboundSchema: z.ZodNativeEnum<typeof StaffActive> =
  StaffActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StaffActive$ {
  /** @deprecated use `StaffActive$inboundSchema` instead. */
  export const inboundSchema = StaffActive$inboundSchema;
  /** @deprecated use `StaffActive$outboundSchema` instead. */
  export const outboundSchema = StaffActive$outboundSchema;
}

/** @internal */
export const Staff$inboundSchema: z.ZodType<Staff, z.ZodTypeDef, unknown> = z
  .object({
    first: z.string(),
    last: z.string(),
    email: z.string(),
    mobile: z.string().optional(),
    lng: z.number().optional(),
    lat: z.number().optional(),
    geo_timestamp: z.string().optional(),
    job_title: z.string().optional(),
    navigating_to_job_uuid: z.string().optional(),
    navigating_timestamp: z.string().optional(),
    navigating_expiry_timestamp: z.string().optional(),
    color: z.string().optional(),
    custom_icon_url: z.any().optional(),
    status_message: z.string().optional(),
    status_message_timestamp: z.string().optional(),
    hide_from_schedule: HideFromSchedule$inboundSchema.optional(),
    security_role_uuid: z.string().optional(),
    uuid: z.string().optional(),
    active: StaffActive$inboundSchema.default(1),
    edit_date: z.any().optional(),
    can_receive_push_notification: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "geo_timestamp": "geoTimestamp",
      "job_title": "jobTitle",
      "navigating_to_job_uuid": "navigatingToJobUuid",
      "navigating_timestamp": "navigatingTimestamp",
      "navigating_expiry_timestamp": "navigatingExpiryTimestamp",
      "custom_icon_url": "customIconUrl",
      "status_message": "statusMessage",
      "status_message_timestamp": "statusMessageTimestamp",
      "hide_from_schedule": "hideFromSchedule",
      "security_role_uuid": "securityRoleUuid",
      "edit_date": "editDate",
      "can_receive_push_notification": "canReceivePushNotification",
    });
  });

/** @internal */
export type Staff$Outbound = {
  first: string;
  last: string;
  email: string;
  mobile?: string | undefined;
  lng?: number | undefined;
  lat?: number | undefined;
  geo_timestamp?: string | undefined;
  job_title?: string | undefined;
  navigating_to_job_uuid?: string | undefined;
  navigating_timestamp?: string | undefined;
  navigating_expiry_timestamp?: string | undefined;
  color?: string | undefined;
  custom_icon_url?: any | undefined;
  status_message?: string | undefined;
  status_message_timestamp?: string | undefined;
  hide_from_schedule?: number | undefined;
  security_role_uuid?: string | undefined;
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  can_receive_push_notification?: string | undefined;
};

/** @internal */
export const Staff$outboundSchema: z.ZodType<
  Staff$Outbound,
  z.ZodTypeDef,
  Staff
> = z.object({
  first: z.string(),
  last: z.string(),
  email: z.string(),
  mobile: z.string().optional(),
  lng: z.number().optional(),
  lat: z.number().optional(),
  geoTimestamp: z.string().optional(),
  jobTitle: z.string().optional(),
  navigatingToJobUuid: z.string().optional(),
  navigatingTimestamp: z.string().optional(),
  navigatingExpiryTimestamp: z.string().optional(),
  color: z.string().optional(),
  customIconUrl: z.any().optional(),
  statusMessage: z.string().optional(),
  statusMessageTimestamp: z.string().optional(),
  hideFromSchedule: HideFromSchedule$outboundSchema.optional(),
  securityRoleUuid: z.string().optional(),
  uuid: z.string().optional(),
  active: StaffActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  canReceivePushNotification: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    geoTimestamp: "geo_timestamp",
    jobTitle: "job_title",
    navigatingToJobUuid: "navigating_to_job_uuid",
    navigatingTimestamp: "navigating_timestamp",
    navigatingExpiryTimestamp: "navigating_expiry_timestamp",
    customIconUrl: "custom_icon_url",
    statusMessage: "status_message",
    statusMessageTimestamp: "status_message_timestamp",
    hideFromSchedule: "hide_from_schedule",
    securityRoleUuid: "security_role_uuid",
    editDate: "edit_date",
    canReceivePushNotification: "can_receive_push_notification",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Staff$ {
  /** @deprecated use `Staff$inboundSchema` instead. */
  export const inboundSchema = Staff$inboundSchema;
  /** @deprecated use `Staff$outboundSchema` instead. */
  export const outboundSchema = Staff$outboundSchema;
  /** @deprecated use `Staff$Outbound` instead. */
  export type Outbound = Staff$Outbound;
}

export function staffToJSON(staff: Staff): string {
  return JSON.stringify(Staff$outboundSchema.parse(staff));
}

export function staffFromJSON(
  jsonString: string,
): SafeParseResult<Staff, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Staff$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Staff' from JSON`,
  );
}

/** @internal */
export const StaffInput$inboundSchema: z.ZodType<
  StaffInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  first: z.string(),
  last: z.string(),
  email: z.string(),
  mobile: z.string().optional(),
  lng: z.number().optional(),
  lat: z.number().optional(),
  geo_timestamp: z.string().optional(),
  job_title: z.string().optional(),
  navigating_to_job_uuid: z.string().optional(),
  navigating_timestamp: z.string().optional(),
  navigating_expiry_timestamp: z.string().optional(),
  color: z.string().optional(),
  custom_icon_url: z.any().optional(),
  status_message: z.string().optional(),
  status_message_timestamp: z.string().optional(),
  hide_from_schedule: HideFromSchedule$inboundSchema.optional(),
  security_role_uuid: z.string().optional(),
  uuid: z.string().optional(),
  active: StaffActive$inboundSchema.default(1),
  can_receive_push_notification: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "geo_timestamp": "geoTimestamp",
    "job_title": "jobTitle",
    "navigating_to_job_uuid": "navigatingToJobUuid",
    "navigating_timestamp": "navigatingTimestamp",
    "navigating_expiry_timestamp": "navigatingExpiryTimestamp",
    "custom_icon_url": "customIconUrl",
    "status_message": "statusMessage",
    "status_message_timestamp": "statusMessageTimestamp",
    "hide_from_schedule": "hideFromSchedule",
    "security_role_uuid": "securityRoleUuid",
    "can_receive_push_notification": "canReceivePushNotification",
  });
});

/** @internal */
export type StaffInput$Outbound = {
  first: string;
  last: string;
  email: string;
  mobile?: string | undefined;
  lng?: number | undefined;
  lat?: number | undefined;
  geo_timestamp?: string | undefined;
  job_title?: string | undefined;
  navigating_to_job_uuid?: string | undefined;
  navigating_timestamp?: string | undefined;
  navigating_expiry_timestamp?: string | undefined;
  color?: string | undefined;
  custom_icon_url?: any | undefined;
  status_message?: string | undefined;
  status_message_timestamp?: string | undefined;
  hide_from_schedule?: number | undefined;
  security_role_uuid?: string | undefined;
  uuid?: string | undefined;
  active: number;
  can_receive_push_notification?: string | undefined;
};

/** @internal */
export const StaffInput$outboundSchema: z.ZodType<
  StaffInput$Outbound,
  z.ZodTypeDef,
  StaffInput
> = z.object({
  first: z.string(),
  last: z.string(),
  email: z.string(),
  mobile: z.string().optional(),
  lng: z.number().optional(),
  lat: z.number().optional(),
  geoTimestamp: z.string().optional(),
  jobTitle: z.string().optional(),
  navigatingToJobUuid: z.string().optional(),
  navigatingTimestamp: z.string().optional(),
  navigatingExpiryTimestamp: z.string().optional(),
  color: z.string().optional(),
  customIconUrl: z.any().optional(),
  statusMessage: z.string().optional(),
  statusMessageTimestamp: z.string().optional(),
  hideFromSchedule: HideFromSchedule$outboundSchema.optional(),
  securityRoleUuid: z.string().optional(),
  uuid: z.string().optional(),
  active: StaffActive$outboundSchema.default(1),
  canReceivePushNotification: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    geoTimestamp: "geo_timestamp",
    jobTitle: "job_title",
    navigatingToJobUuid: "navigating_to_job_uuid",
    navigatingTimestamp: "navigating_timestamp",
    navigatingExpiryTimestamp: "navigating_expiry_timestamp",
    customIconUrl: "custom_icon_url",
    statusMessage: "status_message",
    statusMessageTimestamp: "status_message_timestamp",
    hideFromSchedule: "hide_from_schedule",
    securityRoleUuid: "security_role_uuid",
    canReceivePushNotification: "can_receive_push_notification",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StaffInput$ {
  /** @deprecated use `StaffInput$inboundSchema` instead. */
  export const inboundSchema = StaffInput$inboundSchema;
  /** @deprecated use `StaffInput$outboundSchema` instead. */
  export const outboundSchema = StaffInput$outboundSchema;
  /** @deprecated use `StaffInput$Outbound` instead. */
  export type Outbound = StaffInput$Outbound;
}

export function staffInputToJSON(staffInput: StaffInput): string {
  return JSON.stringify(StaffInput$outboundSchema.parse(staffInput));
}

export function staffInputFromJSON(
  jsonString: string,
): SafeParseResult<StaffInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StaffInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StaffInput' from JSON`,
  );
}
