# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staff: {
    uuid: "123e4567-5690-4973-a448-22b565612ffb",
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingToJobUuid: "123e4567-75db-4ea5-b55d-22b56b50ffbb",
    navigatingTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingExpiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    statusMessageTimestamp: "YYYY-MM-DD HH:MM:SS",
    securityRoleUuid: "123e4567-e30a-4045-ab41-22b562f2e45b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |