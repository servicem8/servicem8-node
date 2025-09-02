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
    geoTimestamp: "2025-09-01 12:00:00",
    navigatingToJobUuid: "123e4567-840f-4bca-b608-23312641d80b",
    navigatingTimestamp: "2025-09-01 12:00:00",
    navigatingExpiryTimestamp: "2025-09-01 12:00:00",
    statusMessageTimestamp: "2025-09-01 12:00:00",
    securityRoleUuid: "123e4567-2884-420a-be20-233121354e3b",
    uuid: "123e4567-9fe2-4783-a6d8-23312b12c94b",
    labourMaterialUuid: "123e4567-b0c0-42aa-ae71-23312e996e7b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |