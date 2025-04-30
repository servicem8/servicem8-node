# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-06ff-4117-b182-22b567faf18b",
  jobUuid: "123e4567-d453-4e9b-b59d-22b56128809b",
  staffUuid: "123e4567-7463-4f2f-95a8-22b566eb6e9b",
  startDate: "YYYY-MM-DD HH:MM:SS",
  endDate: "YYYY-MM-DD HH:MM:SS",
  hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
  allocatedByStaffUuid: "123e4567-aa6e-4fc1-b29f-22b568f7d0cb",
  allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
  materialUuid: "123e4567-1b85-4873-b530-22b56f2a05ab",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Record UUID key                                                              | 123e4567-06ff-4117-b182-22b567faf18b                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag. <br/><br/>Valid values are [0,1]                 |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-d453-4e9b-b59d-22b56128809b                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-7463-4f2f-95a8-22b566eb6e9b                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-aa6e-4fc1-b29f-22b568f7d0cb                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-1b85-4873-b530-22b56f2a05ab                                         |