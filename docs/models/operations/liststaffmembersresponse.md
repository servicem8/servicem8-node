# ListStaffMembersResponse


## Supported Types

### `components.Staff[]`

```typescript
const value: components.Staff[] = [
  {
    uuid: "123e4567-5690-4973-a448-22b565612ffb",
    editDate: "YYYY-MM-DD HH:MM:SS",
    first: "<value>",
    last: "<value>",
    email: "Patsy_Hansen@gmail.com",
    geoTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingToJobUuid: "123e4567-75db-4ea5-b55d-22b56b50ffbb",
    navigatingTimestamp: "YYYY-MM-DD HH:MM:SS",
    navigatingExpiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    statusMessageTimestamp: "YYYY-MM-DD HH:MM:SS",
    securityRoleUuid: "123e4567-e30a-4045-ab41-22b562f2e45b",
  },
];
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

