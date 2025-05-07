# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-d2ec-432e-9ce7-22bcb2af425b",
    fromStaffUuid: "123e4567-2b81-499d-be34-22bcb116518b",
    toStaffUuid: "123e4567-7192-4fd2-ad2b-22bcb1c59f6b",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-ea97-4a04-80ac-22bcbba0c73b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |