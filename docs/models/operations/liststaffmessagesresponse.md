# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-f2e7-4117-b612-2308e1f97f9b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-d5c8-4adb-8356-2308edbbe2ab",
    toStaffUuid: "123e4567-77b7-4217-8a79-2308e7e16e7b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-dfb7-469e-bcff-2308e97efd0b",
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

