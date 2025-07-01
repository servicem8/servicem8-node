# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-2eef-4592-9ec7-22f38d2387db",
  jobUuid: "123e4567-6da8-4e78-963a-22f38a2f69eb",
  staffUuid: "123e4567-2d70-45dc-b684-22f38fe5a25b",
  startDate: "2025-07-01 12:00:00",
  endDate: "2025-07-01 12:00:00",
  hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
  allocatedByStaffUuid: "123e4567-c111-4273-9be9-22f389b66d9b",
  allocatedTimestamp: "2025-07-01 12:00:00",
  materialUuid: "123e4567-bc84-4723-9eff-22f38df9ed0b",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-2eef-4592-9ec7-22f38d2387db                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1].  Valid values are [0,1] |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-6da8-4e78-963a-22f38a2f69eb                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-2d70-45dc-b684-22f38fe5a25b                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-c111-4273-9be9-22f389b66d9b                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-bc84-4723-9eff-22f38df9ed0b                                         |