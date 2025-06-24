# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-a532-4784-8c66-22ec7ecdd14b",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-dbfa-4f6e-a2f0-22ec74a2955b",
    toStaffUuid: "123e4567-2114-4a73-be33-22ec7296f70b",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-ac38-4b15-87dc-22ec7b1efe5b",
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

