# UpdateStaffMessagesRequest

## Example Usage

```typescript
import { UpdateStaffMessagesRequest } from "servicem8/models/operations";

let value: UpdateStaffMessagesRequest = {
  uuid: "fdf2ae97-7688-4ff5-98a8-a0839e15b781",
  staffMessageCreate: {
    fromStaffUuid: "123e4567-6724-42d3-8b51-23e93f160d5b",
    toStaffUuid: "123e4567-2305-4b58-9594-23e933fc03db",
    sentTimestamp: "2026-03-01 12:00:00",
    deliveredTimestamp: "2026-03-01 12:00:00",
    readTimestamp: "2026-03-01 12:00:00",
    regardingJobUuid: "123e4567-9c09-4347-8f06-23e93fd2eb3b",
    uuid: "123e4567-0c24-472b-9153-23e936751f5b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Staff Message                                                      |
| `staffMessageCreate`                                                           | [components.StaffMessageCreate](../../models/components/staffmessagecreate.md) | :heavy_check_mark:                                                             | Staff Message fields to update                                                 |