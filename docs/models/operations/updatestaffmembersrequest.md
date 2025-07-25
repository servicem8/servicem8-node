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
    geoTimestamp: "2025-07-01 12:00:00",
    navigatingToJobUuid: "123e4567-f23d-4cb2-b7f3-230b7318a69b",
    navigatingTimestamp: "2025-07-01 12:00:00",
    navigatingExpiryTimestamp: "2025-07-01 12:00:00",
    statusMessageTimestamp: "2025-07-01 12:00:00",
    securityRoleUuid: "123e4567-3803-4d8b-b7f8-230b7e7cb5fb",
    uuid: "123e4567-fcea-434f-af23-230b76b5faeb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |