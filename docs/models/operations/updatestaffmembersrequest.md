# UpdateStaffMembersRequest

## Example Usage

```typescript
import { UpdateStaffMembersRequest } from "servicem8/models/operations";

let value: UpdateStaffMembersRequest = {
  uuid: "86819172-7c85-4275-baa4-688f62a7732a",
  staff: {
    uuid: "123e4567-0d3d-4a8c-93de-22b56d78afab",
    first: "<value>",
    last: "<value>",
    email: "Haskell_Mosciski1@hotmail.com",
    geoTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingToJobUuid: "123e4567-f778-4f38-aa4c-22b56947e28b",
    navigatingTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingExpiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    statusMessageTimestamp: "YYYY-MM-DD HH:MM:SS",
    securityRoleUuid: "123e4567-2602-42f7-bf8d-22b5650cf00b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Staff Member                                       |
| `staff`                                                        | [components.StaffInput](../../models/components/staffinput.md) | :heavy_check_mark:                                             | Staff Member fields to update                                  |