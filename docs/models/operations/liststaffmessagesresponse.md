# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-030b-4cad-8a4a-22b56db79f6b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    fromStaffUuid: "123e4567-6962-4572-bb0e-22b56ea015fb",
    toStaffUuid: "123e4567-ebd4-4d0d-8251-22b5627dd31b",
    sentTimestamp: "YYYY-MM-DD HH:MM:SS",
    deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    regardingJobUuid: "123e4567-bdf7-4160-9c7f-22b5625bab3b",
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

