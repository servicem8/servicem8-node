# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-3975-4a2d-8762-22b565de64cb",
    fromStaffUuid: "123e4567-7099-4997-9bab-22b56308db0b",
    toStaffUuid: "123e4567-e187-43a7-90ce-22b562c9f74b",
    sentTimestamp: "2025-04-01 12:00:00",
    deliveredTimestamp: "2025-04-01 12:00:00",
    readTimestamp: "2025-04-01 12:00:00",
    regardingJobUuid: "123e4567-c7d9-41c1-8c50-22b56dc1a93b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |