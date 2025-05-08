# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staff: {
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "2025-05-01 12:00:00",
    navigatingToJobUuid: "123e4567-0f98-4ee2-a042-22bcb3a1007b",
    navigatingTimestamp: "2025-05-01 12:00:00",
    navigatingExpiryTimestamp: "2025-05-01 12:00:00",
    statusMessageTimestamp: "2025-05-01 12:00:00",
    securityRoleUuid: "123e4567-673e-4bed-892f-22bcb4c9317b",
    uuid: "123e4567-3572-47b9-973b-22bcbb87cc5b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |