# StaffMessageInput

## Example Usage

```typescript
import { StaffMessageInput } from "servicem8/models/components";

let value: StaffMessageInput = {
  uuid: "123e4567-84d0-48bb-814c-230b7e2b6d4b",
  fromStaffUuid: "123e4567-b5a7-4a0b-bdba-230b72d6ec3b",
  toStaffUuid: "123e4567-a481-424f-b597-230b71d2c4ab",
  sentTimestamp: "2025-07-01 12:00:00",
  deliveredTimestamp: "2025-07-01 12:00:00",
  readTimestamp: "2025-07-01 12:00:00",
  regardingJobUuid: "123e4567-7c2f-4040-a7bd-230b70cc1afb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-84d0-48bb-814c-230b7e2b6d4b                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b5a7-4a0b-bdba-230b72d6ec3b                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-a481-424f-b597-230b71d2c4ab                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7c2f-4040-a7bd-230b70cc1afb                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |