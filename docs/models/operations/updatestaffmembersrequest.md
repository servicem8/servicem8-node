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
    navigatingToJobUuid: "123e4567-6bc2-41b6-8d66-23e9334c0abb",
    navigatingTimestamp: "2026-03-01 12:00:00",
    navigatingExpiryTimestamp: "2026-03-01 12:00:00",
    statusMessageTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-9251-4899-98ed-23e93cb6474b",
    securityRoleUuid: "123e4567-8665-4ff6-8455-23e93e86a10b",
    labourMaterialUuid: "123e4567-1f74-48e4-81a5-23e93dfa0e1b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |