# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-fa45-4342-aed9-23c6fd268b8b",
    toStaffUuid: "123e4567-40db-4be3-8b7a-23c6f8e9222b",
    sentTimestamp: "2026-01-01 12:00:00",
    deliveredTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    regardingJobUuid: "123e4567-91f2-4325-9a55-23c6f8fae9cb",
    uuid: "123e4567-29de-4d23-8aaf-23c6f9c764fb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |