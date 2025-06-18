# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-9d9f-4282-9379-22e6ee7b76fb",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-ecbc-4bf3-87c4-22e6e8368f1b",
    toStaffUuid: "123e4567-420b-480a-9191-22e6ed0ca23b",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-14d7-4555-bf83-22e6e3a4db6b",
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

