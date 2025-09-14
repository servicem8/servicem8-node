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
    navigatingToJobUuid: "123e4567-775e-4460-9614-233c61a4767b",
    navigatingTimestamp: "2025-09-01 12:00:00",
    navigatingExpiryTimestamp: "2025-09-01 12:00:00",
    statusMessageTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-b9eb-469b-b6e5-233c6e0eaeab",
    securityRoleUuid: "123e4567-f63b-482c-9626-233c67431b9b",
    labourMaterialUuid: "123e4567-c61d-44e2-8251-233c6fdaa5eb",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |