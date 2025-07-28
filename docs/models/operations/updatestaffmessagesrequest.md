# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessage: {
    uuid: "123e4567-a411-43b5-834b-230ef44dd5cb",
    fromStaffUuid: "123e4567-eeb5-4834-a1c2-230ef9dbc3db",
    toStaffUuid: "123e4567-5361-4fc1-ba85-230ef5011b8b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-fcc8-4214-84d1-230ef0110d2b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Staff Message                                                    |
| `staffMessage`                                                               | [components.StaffMessageInput](../../models/components/staffmessageinput.md) | :heavy_check_mark:                                                           | Staff Message fields to update                                               |