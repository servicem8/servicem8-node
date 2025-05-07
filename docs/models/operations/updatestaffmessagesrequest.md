# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-60e0-4831-bd90-22bb062cec8b",
    fromStaffUuid: "123e4567-39f8-4be3-ab84-22bb0431678b",
    toStaffUuid: "123e4567-1c7b-4443-8399-22bb05a332fb",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-e37d-4e2e-854b-22bb05ec582b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |