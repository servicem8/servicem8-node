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
    geoTimestamp: "2025-08-01 12:00:00",
    navigatingToJobUuid: "123e4567-5d58-41ed-9673-231efe468b6b",
    navigatingTimestamp: "2025-08-01 12:00:00",
    navigatingExpiryTimestamp: "2025-08-01 12:00:00",
    statusMessageTimestamp: "2025-08-01 12:00:00",
    securityRoleUuid: "123e4567-53d1-48d8-ade8-231ef92257db",
    uuid: "123e4567-29b4-40ab-9bf7-231ef2c0e0cb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |