# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-dbed-4d02-977c-2318400cb17b",
    editDate: "2025-08-01 12:00:00",
    fromStaffUuid: "123e4567-1057-443f-84fa-23184d9ae6fb",
    toStaffUuid: "123e4567-9c2a-494f-9b31-23184813a08b",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-58b4-41f0-b4c2-23184622696b",
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

