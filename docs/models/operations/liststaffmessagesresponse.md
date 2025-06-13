# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-f749-414f-ab5c-22e07e94346b",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-d070-4499-8afc-22e07a9b3fdb",
    toStaffUuid: "123e4567-287e-431e-a9f3-22e07de1a68b",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-b98d-4d2a-b24e-22e07c4d2d6b",
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

