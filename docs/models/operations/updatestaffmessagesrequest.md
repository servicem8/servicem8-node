# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-585b-467f-8cff-23b2ec80edbb",
    toStaffUuid: "123e4567-9c8b-43b0-893e-23b2e7dd5a2b",
    sentTimestamp: "2026-01-01 12:00:00",
    deliveredTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    regardingJobUuid: "123e4567-e354-4cce-b902-23b2e4b6e3bb",
    uuid: "123e4567-f7fa-44ae-bfe1-23b2eebfc45b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |