# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-dbed-4d02-977c-2318400cb17b",
    fromStaffUuid: "123e4567-1057-443f-84fa-23184d9ae6fb",
    toStaffUuid: "123e4567-9c2a-494f-9b31-23184813a08b",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-58b4-41f0-b4c2-23184622696b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |