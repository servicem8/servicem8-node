# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-eb3c-4f5f-b60b-230763599e5b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-06a7-4580-bd96-230761c57c3b",
    toStaffUuid: "123e4567-726c-4f8b-82ab-230767080bcb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-1f1e-4c96-bbf7-23076cbccbab",
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

