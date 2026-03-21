# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-db4b-4b67-9a3c-23f94d686a3b",
    toStaffUuid: "123e4567-36d3-4ea6-98b9-23f94cd98f0b",
    sentTimestamp: "2026-03-01 12:00:00",
    deliveredTimestamp: "2026-03-01 12:00:00",
    readTimestamp: "2026-03-01 12:00:00",
    regardingJobUuid: "123e4567-5251-474e-8fb8-23f9484328cb",
    uuid: "123e4567-c00b-4d12-bc4d-23f941bae2eb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |