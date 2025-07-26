# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-adb2-4f1c-a90c-230c4e931d0b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-a685-4f16-a71c-230c44ea7c7b",
    toStaffUuid: "123e4567-ef4f-4d31-91f6-230c4125d28b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-d097-469f-81da-230c4e6a3bdb",
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

