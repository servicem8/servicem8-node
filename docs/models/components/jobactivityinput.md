# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-965c-4e31-a945-22b56b9f79eb",
  jobUuid: "123e4567-9a7e-4cd1-990c-22b56cf4426b",
  staffUuid: "123e4567-9ea0-4a02-b6d2-22b567420a8b",
  startDate: "YYYY-MM-DD HH:MM:SS",
  endDate: "YYYY-MM-DD HH:MM:SS",
  hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
  allocatedByStaffUuid: "123e4567-35b8-478c-92a3-22b567abeb1b",
  allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
  materialUuid: "123e4567-093b-4f55-aab2-22b56462c0eb",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Record UUID key                                                              | 123e4567-965c-4e31-a945-22b56b9f79eb                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag. <br/><br/>Valid values are [0,1]                 |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-9a7e-4cd1-990c-22b56cf4426b                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-9ea0-4a02-b6d2-22b567420a8b                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-35b8-478c-92a3-22b567abeb1b                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-093b-4f55-aab2-22b56462c0eb                                         |