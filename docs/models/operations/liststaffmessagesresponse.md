# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-9723-4d1c-b34b-22e6e244a05b",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-b4b0-4951-99c5-22e6efab511b",
    toStaffUuid: "123e4567-f30a-4b9e-af68-22e6eeec87cb",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-638b-4632-a374-22e6e59b66eb",
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

