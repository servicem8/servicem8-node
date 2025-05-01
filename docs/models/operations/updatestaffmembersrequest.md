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
    navigatingToJobUuid: "123e4567-802e-428d-b96a-22b6c3da48eb",
    navigatingTimestamp: "2025-05-01 12:00:00",
    navigatingExpiryTimestamp: "2025-05-01 12:00:00",
    statusMessageTimestamp: "2025-05-01 12:00:00",
    securityRoleUuid: "123e4567-4ca6-4107-8b96-22b6c6ae760b",
    uuid: "123e4567-ab70-4d45-a855-22b6c9434f5b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |