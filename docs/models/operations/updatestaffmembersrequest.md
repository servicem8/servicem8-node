# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staff: {
    uuid: "123e4567-876d-4135-8689-22b4dc3ea4eb",
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingToJobUuid: "123e4567-02e9-4cc4-8dd4-22b4d5fb61cb",
    navigatingTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingExpiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    statusMessageTimestamp: "YYYY-MM-DD HH:MM:SS",
    securityRoleUuid: "123e4567-e59a-4652-88f3-22b4dc780a8b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |