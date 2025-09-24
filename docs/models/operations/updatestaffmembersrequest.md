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
    navigatingToJobUuid: "123e4567-ea64-4c9e-b44c-23482be3621b",
    navigatingTimestamp: "2025-09-01 12:00:00",
    navigatingExpiryTimestamp: "2025-09-01 12:00:00",
    statusMessageTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-f48b-4e5d-aa67-234822e7757b",
    securityRoleUuid: "123e4567-cfaf-4aee-86c8-23482e42f00b",
    labourMaterialUuid: "123e4567-18aa-456f-bdec-234822205fab",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |