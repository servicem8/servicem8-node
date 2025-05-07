# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-8f06-47f2-83dc-22bcb735154b",
    editDate: "2025-05-01 12:00:00",
    fromStaffUuid: "123e4567-b915-49c5-9331-22bcba33e49b",
    toStaffUuid: "123e4567-8e6e-4dfd-ae5a-22bcb51e72bb",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-a73f-490f-9bfc-22bcb719020b",
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

