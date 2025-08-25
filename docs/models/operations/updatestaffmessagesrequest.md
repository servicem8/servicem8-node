# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-abdb-4322-a8df-2329b5ae407b",
    fromStaffUuid: "123e4567-b98e-4778-9bb6-2329bbb2e71b",
    toStaffUuid: "123e4567-3660-4750-950f-2329ba6dacab",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-33ad-4fc3-81e6-2329b4763b1b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |