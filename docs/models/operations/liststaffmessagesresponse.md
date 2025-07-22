# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-966b-46a9-9ece-2308ebe27b4b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-14fd-42d0-9211-2308eabce93b",
    toStaffUuid: "123e4567-528c-4956-8ca4-2308e34fa95b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-9103-4f12-afec-2308e3bf488b",
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

