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
    navigatingToJobUuid: "123e4567-a405-4e87-94a6-22bdc77c15bb",
    navigatingTimestamp: "2025-05-01 12:00:00",
    navigatingExpiryTimestamp: "2025-05-01 12:00:00",
    statusMessageTimestamp: "2025-05-01 12:00:00",
    securityRoleUuid: "123e4567-3bf1-4901-9178-22bdcf8c7bbb",
    uuid: "123e4567-ea53-4e3b-8adf-22bdc355593b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |