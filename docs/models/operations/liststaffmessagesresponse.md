# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-821b-42ac-a1a6-22b567d1c0fb",
    editDate: "YYYY-MM-DD HH:MM:SS",
    fromStaffUuid: "123e4567-300d-4162-ad3f-22b56f11b63b",
    toStaffUuid: "123e4567-6bdf-49d5-a427-22b56b20c42b",
    sentTimestamp: "YYYY-MM-DD HH:MM:SS",
    deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    regardingJobUuid: "123e4567-9cff-4f19-b199-22b56e61110b",
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

