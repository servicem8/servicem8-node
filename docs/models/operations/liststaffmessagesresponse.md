# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-bddc-428d-a54f-230b7dd594ab",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-470d-4c61-ac73-230b7c6fdc2b",
    toStaffUuid: "123e4567-5b3b-4628-8bce-230b759aa6fb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-d7cb-48cb-8787-230b7a6b662b",
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

