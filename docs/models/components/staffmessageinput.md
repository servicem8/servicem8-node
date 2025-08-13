# StaffMessageInput

## Example Usage

```typescript
import { StaffMessageInput } from "servicem8/models/components";

let value: StaffMessageInput = {
  uuid: "123e4567-e0bf-422f-acbc-231d272c813b",
  fromStaffUuid: "123e4567-6f9a-4ebf-a6d6-231d2369c11b",
  toStaffUuid: "123e4567-9af2-450a-9208-231d276ac85b",
  sentTimestamp: "2025-08-01 12:00:00",
  deliveredTimestamp: "2025-08-01 12:00:00",
  readTimestamp: "2025-08-01 12:00:00",
  regardingJobUuid: "123e4567-075b-4ec4-aa2b-231d207d4c5b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-e0bf-422f-acbc-231d272c813b                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6f9a-4ebf-a6d6-231d2369c11b                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9af2-450a-9208-231d276ac85b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-075b-4ec4-aa2b-231d207d4c5b                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |