# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-af9e-4eea-9f23-230b7569168b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-c964-423b-bfd9-230b71752e3b",
    toStaffUuid: "123e4567-87f8-459c-ac43-230b7157137b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-28da-4241-a611-230b70fd155b",
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

