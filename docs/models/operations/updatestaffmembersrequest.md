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
    navigatingToJobUuid: "123e4567-d911-4f68-839c-2308e017457b",
    navigatingTimestamp: "2025-07-01 12:00:00",
    navigatingExpiryTimestamp: "2025-07-01 12:00:00",
    statusMessageTimestamp: "2025-07-01 12:00:00",
    securityRoleUuid: "123e4567-fd59-415b-881f-2308e4bed41b",
    uuid: "123e4567-fbbf-4600-9186-2308ed54de5b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |