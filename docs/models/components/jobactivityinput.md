# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-414b-409d-a0cc-231104c8953b",
  jobUuid: "123e4567-3dcb-4bce-9276-23110867d7cb",
  staffUuid: "123e4567-da0d-470e-9734-231109867e7b",
  startDate: "2025-07-01 12:00:00",
  endDate: "2025-07-01 12:00:00",
  hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
  allocatedByStaffUuid: "123e4567-ec99-4138-aaa2-23110f57af3b",
  allocatedTimestamp: "2025-07-01 12:00:00",
  materialUuid: "123e4567-ce03-4320-a78d-231103d9badb",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-414b-409d-a0cc-231104c8953b                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1].  Valid values are [0,1] |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-3dcb-4bce-9276-23110867d7cb                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-da0d-470e-9734-231109867e7b                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-ec99-4138-aaa2-23110f57af3b                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2025-07-01 12:00:00                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-ce03-4320-a78d-231103d9badb                                         |