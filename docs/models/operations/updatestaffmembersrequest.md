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
    navigatingToJobUuid: "123e4567-6edc-4632-abaf-231cf741a89b",
    navigatingTimestamp: "2025-08-01 12:00:00",
    navigatingExpiryTimestamp: "2025-08-01 12:00:00",
    statusMessageTimestamp: "2025-08-01 12:00:00",
    securityRoleUuid: "123e4567-c92a-4bf2-b6ff-231cfda2b55b",
    uuid: "123e4567-76de-4ac6-9aa4-231cf325433b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |