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
    navigatingToJobUuid: "123e4567-36f6-43f9-9e5e-23f94b960ebb",
    navigatingTimestamp: "2026-03-01 12:00:00",
    navigatingExpiryTimestamp: "2026-03-01 12:00:00",
    statusMessageTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-9d5c-42e8-b767-23f9483bb5fb",
    securityRoleUuid: "123e4567-9d7d-4185-ab9c-23f94afa452b",
    labourMaterialUuid: "123e4567-2b10-4d9e-abea-23f946dd59fb",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |