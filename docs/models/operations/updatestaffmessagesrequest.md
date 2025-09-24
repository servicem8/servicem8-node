# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-dbcd-4d87-b0ee-234824ab55bb",
    toStaffUuid: "123e4567-e0e9-43f9-946e-23482ac8d7bb",
    sentTimestamp: "2025-09-01 12:00:00",
    deliveredTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    regardingJobUuid: "123e4567-c6a6-4c5a-86ed-23482b199f5b",
    uuid: "123e4567-1a26-4f4f-b03c-23482dda98eb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |