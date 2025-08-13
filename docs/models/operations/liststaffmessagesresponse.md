# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-e0bf-422f-acbc-231d272c813b",
    editDate: "2025-08-01 12:00:00",
    fromStaffUuid: "123e4567-6f9a-4ebf-a6d6-231d2369c11b",
    toStaffUuid: "123e4567-9af2-450a-9208-231d276ac85b",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-075b-4ec4-aa2b-231d207d4c5b",
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

