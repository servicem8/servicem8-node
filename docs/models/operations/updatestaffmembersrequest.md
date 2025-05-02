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
    navigatingToJobUuid: "123e4567-668b-4530-b698-22b70e10f10b",
    navigatingTimestamp: "2025-05-01 12:00:00",
    navigatingExpiryTimestamp: "2025-05-01 12:00:00",
    statusMessageTimestamp: "2025-05-01 12:00:00",
    securityRoleUuid: "123e4567-63db-448e-a2d7-22b705b43f7b",
    uuid: "123e4567-cf73-48dd-8cf2-22b70d3db1ab",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |