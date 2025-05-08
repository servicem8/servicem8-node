# StaffMessageInput

## Example Usage

```typescript
import { StaffMessageInput } from "servicem8/models/components";

let value: StaffMessageInput = {
  uuid: "123e4567-88b8-400a-b05c-22bcbf96880b",
  fromStaffUuid: "123e4567-8b56-4322-91cc-22bcb19c09eb",
  toStaffUuid: "123e4567-804a-41f9-93de-22bcb3c17dfb",
  sentTimestamp: "2025-05-01 12:00:00",
  deliveredTimestamp: "2025-05-01 12:00:00",
  readTimestamp: "2025-05-01 12:00:00",
  regardingJobUuid: "123e4567-3901-4c79-9ea5-22bcb9c2d7ab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-88b8-400a-b05c-22bcbf96880b                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8b56-4322-91cc-22bcb19c09eb                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-804a-41f9-93de-22bcb3c17dfb                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3901-4c79-9ea5-22bcb9c2d7ab                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |