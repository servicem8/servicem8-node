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
    geoTimestamp: "2026-01-01 12:00:00",
    navigatingToJobUuid: "123e4567-4030-4c3d-af74-23c6fea2126b",
    navigatingTimestamp: "2026-01-01 12:00:00",
    navigatingExpiryTimestamp: "2026-01-01 12:00:00",
    statusMessageTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-ced7-4ae8-80f4-23c6fb245c7b",
    securityRoleUuid: "123e4567-d4c6-4d84-ab87-23c6f401466b",
    labourMaterialUuid: "123e4567-b82e-4f29-b73d-23c6f42700bb",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |