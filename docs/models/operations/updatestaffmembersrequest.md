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
    geoTimestamp: "2025-04-01 12:00:00",
    navigatingToJobUuid: "123e4567-6827-4d43-9bc7-22b56b9b441b",
    navigatingTimestamp: "2025-04-01 12:00:00",
    navigatingExpiryTimestamp: "2025-04-01 12:00:00",
    statusMessageTimestamp: "2025-04-01 12:00:00",
    securityRoleUuid: "123e4567-1d85-453e-ac04-22b563eef83b",
    uuid: "123e4567-477f-45f6-979d-22b56af4a11b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |