# StaffMessage

## Example Usage

```typescript
import { StaffMessage } from "servicem8/models/components";

let value: StaffMessage = {
  uuid: "123e4567-5c62-4630-999b-231cfbe19bab",
  editDate: "2025-08-01 12:00:00",
  fromStaffUuid: "123e4567-28e6-46c4-ba1f-231cf404770b",
  toStaffUuid: "123e4567-3d8c-4628-afa9-231cfddcf75b",
  sentTimestamp: "2025-08-01 12:00:00",
  deliveredTimestamp: "2025-08-01 12:00:00",
  readTimestamp: "2025-08-01 12:00:00",
  regardingJobUuid: "123e4567-d977-4fa9-abcc-231cfe1c79ab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-5c62-4630-999b-231cfbe19bab                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-28e6-46c4-ba1f-231cf404770b                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3d8c-4628-afa9-231cfddcf75b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d977-4fa9-abcc-231cfe1c79ab                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |