# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-b83c-4566-8648-22fb29d5c56b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-d69d-4e6b-9de7-22fb2332eabb",
    toStaffUuid: "123e4567-c95b-4cf7-8373-22fb20849a3b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-4241-49f8-8cf1-22fb2c93159b",
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

