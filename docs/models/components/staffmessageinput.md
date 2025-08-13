# StaffMessageInput

## Example Usage

```typescript
import { StaffMessageInput } from "servicem8/models/components";

let value: StaffMessageInput = {
  uuid: "123e4567-6660-4657-b4f3-231ef8e3a6bb",
  fromStaffUuid: "123e4567-cf24-475f-b7a3-231ef7454aab",
  toStaffUuid: "123e4567-1975-43d0-be5c-231ef28cfe2b",
  sentTimestamp: "2025-08-01 12:00:00",
  deliveredTimestamp: "2025-08-01 12:00:00",
  readTimestamp: "2025-08-01 12:00:00",
  regardingJobUuid: "123e4567-5745-4212-9ea7-231ef1870f0b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-6660-4657-b4f3-231ef8e3a6bb                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-cf24-475f-b7a3-231ef7454aab                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1975-43d0-be5c-231ef28cfe2b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5745-4212-9ea7-231ef1870f0b                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |