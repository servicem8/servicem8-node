# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-d2ec-432e-9ce7-22bcb2af425b",
    editDate: "2025-05-01 12:00:00",
    fromStaffUuid: "123e4567-2b81-499d-be34-22bcb116518b",
    toStaffUuid: "123e4567-7192-4fd2-ad2b-22bcb1c59f6b",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-ea97-4a04-80ac-22bcbba0c73b",
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

