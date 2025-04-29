# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-c22a-430a-9448-22b4d045c56b",
    fromStaffUuid: "123e4567-022a-480e-a659-22b4db3c7ddb",
    toStaffUuid: "123e4567-9c5d-4d25-94ae-22b4d25e969b",
    sentTimestamp: "YYYY-MM-DD HH:MM:SS",
    deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    regardingJobUuid: "123e4567-aefd-48d4-a075-22b4dcd3cfdb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |