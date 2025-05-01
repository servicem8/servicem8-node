# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-e0b9-4eb9-81aa-22b6c61035eb",
    editDate: "2025-05-01 12:00:00",
    fromStaffUuid: "123e4567-8bfa-4309-a8ea-22b6cc48502b",
    toStaffUuid: "123e4567-ed30-41f8-a2c8-22b6cfb86c3b",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-892d-4d74-b349-22b6ce29188b",
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

