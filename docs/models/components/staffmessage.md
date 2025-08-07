# StaffMessage

## Example Usage

```typescript
import { StaffMessage } from "servicem8/models/components";

let value: StaffMessage = {
  uuid: "123e4567-dbed-4d02-977c-2318400cb17b",
  editDate: "2025-08-01 12:00:00",
  fromStaffUuid: "123e4567-1057-443f-84fa-23184d9ae6fb",
  toStaffUuid: "123e4567-9c2a-494f-9b31-23184813a08b",
  sentTimestamp: "2025-08-01 12:00:00",
  deliveredTimestamp: "2025-08-01 12:00:00",
  readTimestamp: "2025-08-01 12:00:00",
  regardingJobUuid: "123e4567-58b4-41f0-b4c2-23184622696b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-dbed-4d02-977c-2318400cb17b                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1057-443f-84fa-23184d9ae6fb                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9c2a-494f-9b31-23184813a08b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-58b4-41f0-b4c2-23184622696b                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |