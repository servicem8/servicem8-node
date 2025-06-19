# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-435d-4a91-beca-22e6ec50f47b",
  jobUuid: "123e4567-9dd4-45fc-a5a4-22e6e13442eb",
  staffUuid: "123e4567-46de-413f-a7c3-22e6eca9b9ab",
  startDate: "2025-06-01 12:00:00",
  endDate: "2025-06-01 12:00:00",
  hasBeenOpenedTimestamp: "2025-06-01 12:00:00",
  allocatedByStaffUuid: "123e4567-1ea7-4f46-8e86-22e6e438b2ab",
  allocatedTimestamp: "2025-06-01 12:00:00",
  materialUuid: "123e4567-d35c-4d49-8210-22e6e5cb9f0b",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-435d-4a91-beca-22e6ec50f47b                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1].  Valid values are [0,1] |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-9dd4-45fc-a5a4-22e6e13442eb                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-46de-413f-a7c3-22e6eca9b9ab                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-06-01 12:00:00                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-06-01 12:00:00                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-06-01 12:00:00                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-1ea7-4f46-8e86-22e6e438b2ab                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-06-01 12:00:00                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-d35c-4d49-8210-22e6e5cb9f0b                                         |