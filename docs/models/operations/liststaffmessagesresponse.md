# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-fe27-4fc5-8bdd-23110eef41fb",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-ba56-4719-9e04-2311090c7e2b",
    toStaffUuid: "123e4567-ce81-4f2e-8d10-23110d3601bb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-bcb7-426e-94fb-231108bdcd2b",
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

