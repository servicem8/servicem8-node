# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-322b-4c7b-a9c8-22fd89b40dcb",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-0a6d-4b9e-8b0e-22fd8c5ece9b",
    toStaffUuid: "123e4567-3773-43eb-9c06-22fd87851adb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-fa1c-43e1-8216-22fd8d0c365b",
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

