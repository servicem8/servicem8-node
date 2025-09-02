# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-73b8-4a96-8e9e-2331261edb0b",
    fromStaffUuid: "123e4567-ef9c-4b75-aff2-233128aee34b",
    toStaffUuid: "123e4567-4e21-4cc1-aa1c-23312a9c29eb",
    sentTimestamp: "2025-09-01 12:00:00",
    deliveredTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    regardingJobUuid: "123e4567-85dd-4e21-8e37-233121e0495b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |