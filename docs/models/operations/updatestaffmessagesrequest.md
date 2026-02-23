# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-f40a-4e88-a0dd-23d595f87fcb",
    toStaffUuid: "123e4567-d60a-456e-a3fa-23d59a4b6dbb",
    sentTimestamp: "2026-02-01 12:00:00",
    deliveredTimestamp: "2026-02-01 12:00:00",
    readTimestamp: "2026-02-01 12:00:00",
    regardingJobUuid: "123e4567-f1e4-4b57-a30a-23d59be4551b",
    uuid: "123e4567-f4b2-455c-99c2-23d5978dde2b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |