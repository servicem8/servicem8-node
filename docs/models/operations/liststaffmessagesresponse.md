# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-0d48-4d1f-a864-230c42e3e56b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-86d9-471e-ba3a-230c4ba5a12b",
    toStaffUuid: "123e4567-f9bc-4fe2-904a-230c4f385f2b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-5825-481e-b12e-230c42a84b4b",
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

