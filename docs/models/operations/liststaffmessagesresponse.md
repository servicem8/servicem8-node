# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-9479-40a1-88ce-230fe9524adb",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-631e-4dfb-b381-230fe5fde23b",
    toStaffUuid: "123e4567-89fb-4ec7-b85d-230fe1551bbb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-d673-43f7-bdc8-230fe5ea81cb",
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

