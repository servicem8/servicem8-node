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
    navigatingToJobUuid: "123e4567-d2c3-44d6-a649-23b2ee847aeb",
    navigatingTimestamp: "2026-01-01 12:00:00",
    navigatingExpiryTimestamp: "2026-01-01 12:00:00",
    statusMessageTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-6c68-44cd-b4dd-23b2ecd8b28b",
    securityRoleUuid: "123e4567-8820-49dc-ae2f-23b2e64e1d1b",
    labourMaterialUuid: "123e4567-c958-4f38-85d8-23b2e848ec0b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |