# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-f310-4e5c-a0fc-230a65d2526b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-6ee7-48f6-a2b3-230a6e449ffb",
    toStaffUuid: "123e4567-f527-4861-9711-230a6979e20b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-045e-49a1-a6f9-230a6de3125b",
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

