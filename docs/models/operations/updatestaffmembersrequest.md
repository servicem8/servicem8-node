# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staff: {
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "2025-05-01 12:00:00",
    navigatingToJobUuid: "123e4567-eec0-4cb8-8793-22b6caf1d7db",
    navigatingTimestamp: "2025-05-01 12:00:00",
    navigatingExpiryTimestamp: "2025-05-01 12:00:00",
    statusMessageTimestamp: "2025-05-01 12:00:00",
    securityRoleUuid: "123e4567-6598-4567-8f67-22b6c4d8b2bb",
    uuid: "123e4567-da1a-41f9-b153-22b6c272d6eb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |