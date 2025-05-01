# StaffMessage

## Example Usage

```typescript
import { StaffMessage } from "servicem8/models/components";

let value: StaffMessage = {
  uuid: "123e4567-e0b9-4eb9-81aa-22b6c61035eb",
  editDate: "2025-05-01 12:00:00",
  fromStaffUuid: "123e4567-8bfa-4309-a8ea-22b6cc48502b",
  toStaffUuid: "123e4567-ed30-41f8-a2c8-22b6cfb86c3b",
  sentTimestamp: "2025-05-01 12:00:00",
  deliveredTimestamp: "2025-05-01 12:00:00",
  readTimestamp: "2025-05-01 12:00:00",
  regardingJobUuid: "123e4567-892d-4d74-b349-22b6ce29188b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-e0b9-4eb9-81aa-22b6c61035eb                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-05-01 12:00:00                                                            |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8bfa-4309-a8ea-22b6cc48502b                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ed30-41f8-a2c8-22b6cfb86c3b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-892d-4d74-b349-22b6ce29188b                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |