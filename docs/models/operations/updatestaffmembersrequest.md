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
    navigatingToJobUuid: "123e4567-80e6-442a-8d4a-23110bc0bc0b",
    navigatingTimestamp: "2025-07-01 12:00:00",
    navigatingExpiryTimestamp: "2025-07-01 12:00:00",
    statusMessageTimestamp: "2025-07-01 12:00:00",
    securityRoleUuid: "123e4567-cf7c-4ad6-ba95-23110a2a143b",
    uuid: "123e4567-2975-43aa-932b-23110b455ceb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |