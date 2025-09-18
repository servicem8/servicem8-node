# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staffCreate: {
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "2025-09-01 12:00:00",
    navigatingToJobUuid: "123e4567-1e5e-4d72-94b9-234226f6986b",
    navigatingTimestamp: "2025-09-01 12:00:00",
    navigatingExpiryTimestamp: "2025-09-01 12:00:00",
    statusMessageTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-e341-4f84-b8fd-234225278b6b",
    securityRoleUuid: "123e4567-ae4e-45a4-ae6b-234227e25d7b",
    labourMaterialUuid: "123e4567-3874-49a8-95ee-23422ab2f5cb",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |