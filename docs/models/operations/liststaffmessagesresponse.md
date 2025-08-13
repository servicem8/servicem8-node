# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-0cd4-4f01-aa49-231efeb9377b",
    editDate: "2025-08-01 12:00:00",
    fromStaffUuid: "123e4567-5791-410a-a033-231efa5d631b",
    toStaffUuid: "123e4567-e20b-48d8-aaae-231efc68d38b",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-13db-4bf8-851c-231eff0cdb6b",
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

