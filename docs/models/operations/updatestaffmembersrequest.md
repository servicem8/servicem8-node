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
    geoTimestamp: "2025-07-01 12:00:00",
    navigatingToJobUuid: "123e4567-2e9d-46f8-a1af-230047cc91eb",
    navigatingTimestamp: "2025-07-01 12:00:00",
    navigatingExpiryTimestamp: "2025-07-01 12:00:00",
    statusMessageTimestamp: "2025-07-01 12:00:00",
    securityRoleUuid: "123e4567-04fc-4159-af14-2300469ca4bb",
    uuid: "123e4567-d856-40ac-b471-230042eb3c8b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |