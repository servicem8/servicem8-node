# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staff: {
    uuid: "123e4567-e9bc-479a-8bf1-22b4d962fe9b",
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingToJobUuid: "123e4567-d527-48f4-8c4c-22b4df5c869b",
    navigatingTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingExpiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    statusMessageTimestamp: "YYYY-MM-DD HH:MM:SS",
    securityRoleUuid: "123e4567-8665-4de6-bb36-22b4dc40e2bb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |