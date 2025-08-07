# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-274d-4441-bd49-23184aa63e8b",
  jobUuid: "123e4567-650a-4da4-a79a-23184ea94ecb",
  staffUuid: "123e4567-2e2f-41d9-ab88-231845f3388b",
  startDate: "2025-08-01 12:00:00",
  endDate: "2025-08-01 12:00:00",
  hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
  allocatedByStaffUuid: "123e4567-5268-4be8-9ed1-231849079e3b",
  allocatedTimestamp: "2025-08-01 12:00:00",
  materialUuid: "123e4567-787b-414f-a440-23184271224b",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-274d-4441-bd49-23184aa63e8b                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1].  Valid values are [0,1] |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-650a-4da4-a79a-23184ea94ecb                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-2e2f-41d9-ab88-231845f3388b                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-08-01 12:00:00                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-08-01 12:00:00                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-08-01 12:00:00                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-5268-4be8-9ed1-231849079e3b                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-08-01 12:00:00                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-787b-414f-a440-23184271224b                                         |