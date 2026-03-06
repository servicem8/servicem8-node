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
    geoTimestamp: "2026-03-01 12:00:00",
    navigatingToJobUuid: "123e4567-7427-40c6-9e44-23eb299ea21b",
    navigatingTimestamp: "2026-03-01 12:00:00",
    navigatingExpiryTimestamp: "2026-03-01 12:00:00",
    statusMessageTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-f3fd-4ded-a0ed-23eb20e1f46b",
    securityRoleUuid: "123e4567-2640-4c86-9f44-23eb2b7ed3ab",
    labourMaterialUuid: "123e4567-d622-4fc2-be5b-23eb2b88c34b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |