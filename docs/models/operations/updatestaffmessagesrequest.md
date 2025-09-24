# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-bcc3-410b-8a12-234821adadbb",
    toStaffUuid: "123e4567-6461-4080-8514-234825c9b35b",
    sentTimestamp: "2025-09-01 12:00:00",
    deliveredTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    regardingJobUuid: "123e4567-b431-424e-9720-234821a0463b",
    uuid: "123e4567-fcda-49d4-b9bb-23482367450b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |