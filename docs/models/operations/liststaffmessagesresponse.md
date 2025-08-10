# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-b988-4eee-869b-231b292835db",
    editDate: "2025-08-01 12:00:00",
    fromStaffUuid: "123e4567-4124-4328-9004-231b25099b7b",
    toStaffUuid: "123e4567-5ad6-4fac-8d88-231b2cecc2db",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-62cf-4daa-b3a6-231b2f99b6fb",
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

