# JobActivityInput

## Example Usage

```typescript
import { JobActivityInput } from "servicem8/models/components";

let value: JobActivityInput = {
  uuid: "123e4567-1fda-42d1-83c1-22b4dbbc1fcb",
  jobUuid: "123e4567-ca5c-4bae-bc7f-22b4dbd153db",
  staffUuid: "123e4567-4790-4b80-b7cc-22b4d783ffeb",
  startDate: "YYYY-MM-DD HH:MM:SS",
  endDate: "YYYY-MM-DD HH:MM:SS",
  hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
  allocatedByStaffUuid: "123e4567-e4ed-40d8-8e5a-22b4d02fc29b",
  allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
  materialUuid: "123e4567-9bf7-4a38-82cb-22b4d4df40cb",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Record UUID key                                                              | 123e4567-1fda-42d1-83c1-22b4dbbc1fcb                                         |
| `active`                                                                     | [components.JobActivityActive](../../models/components/jobactivityactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag. <br/><br/>Valid values are [0,1]                 |                                                                              |
| `jobUuid`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-ca5c-4bae-bc7f-22b4dbd153db                                         |
| `staffUuid`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-4790-4b80-b7cc-22b4d783ffeb                                         |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `activityWasScheduled`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasRecorded`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `activityWasAutomated`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpened`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `hasBeenOpenedTimestamp`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `travelTimeInSeconds`                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `travelDistanceInMeters`                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `allocatedByStaffUuid`                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-e4ed-40d8-8e5a-22b4d02fc29b                                         |
| `allocatedTimestamp`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | YYYY-MM-DD HH:MM:SS                                                          |
| `materialUuid`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 123e4567-9bf7-4a38-82cb-22b4d4df40cb                                         |