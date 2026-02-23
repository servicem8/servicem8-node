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
    geoTimestamp: "2026-02-01 12:00:00",
    navigatingToJobUuid: "123e4567-b5ed-45a0-9420-23d594e95d1b",
    navigatingTimestamp: "2026-02-01 12:00:00",
    navigatingExpiryTimestamp: "2026-02-01 12:00:00",
    statusMessageTimestamp: "2026-02-01 12:00:00",
    uuid: "123e4567-c4ae-41ac-bd0b-23d59b7b50bb",
    securityRoleUuid: "123e4567-1571-418a-a71f-23d5985f502b",
    labourMaterialUuid: "123e4567-672d-4926-a3f4-23d59f3df63b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Staff Member                                         |
| `staffCreate`                                                    | [components.StaffCreate](../../models/components/staffcreate.md) | :heavy_check_mark:                                               | Staff Member fields to update                                    |