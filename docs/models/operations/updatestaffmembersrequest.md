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
    navigatingToJobUuid: "123e4567-ea32-496e-93d0-23eb2d8a35db",
    navigatingTimestamp: "2026-03-01 12:00:00",
    navigatingExpiryTimestamp: "2026-03-01 12:00:00",
    statusMessageTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-4616-4260-a4cc-23eb23cf975b",
    securityRoleUuid: "123e4567-c4c1-4dc2-9160-23eb2ec1a15b",
    labourMaterialUuid: "123e4567-9a3d-44f5-b282-23eb2e5e268b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |