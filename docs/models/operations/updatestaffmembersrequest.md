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
    geoTimestamp: "2025-08-01 12:00:00",
    navigatingToJobUuid: "123e4567-dfba-4311-9b05-231d2faa0cab",
    navigatingTimestamp: "2025-08-01 12:00:00",
    navigatingExpiryTimestamp: "2025-08-01 12:00:00",
    statusMessageTimestamp: "2025-08-01 12:00:00",
    securityRoleUuid: "123e4567-2ee0-445f-80a2-231d2834b27b",
    uuid: "123e4567-c777-4e1d-9c6a-231d27f7957b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |