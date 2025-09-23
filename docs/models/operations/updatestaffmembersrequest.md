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
    navigatingToJobUuid: "123e4567-7c92-4606-bb7e-234679ef135b",
    navigatingTimestamp: "2025-09-01 12:00:00",
    navigatingExpiryTimestamp: "2025-09-01 12:00:00",
    statusMessageTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-9aaf-41d0-a984-23467a02addb",
    securityRoleUuid: "123e4567-9c3c-4027-8794-23467dcc042b",
    labourMaterialUuid: "123e4567-94ac-44e9-9cb8-2346778d59db",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |