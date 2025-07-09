# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-2967-49a0-87f7-22fb2ef4673b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-626b-4101-a3f4-22fb2f2dd79b",
    toStaffUuid: "123e4567-d72a-47f9-92e4-22fb25ca6abb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-f7af-435d-b596-22fb282eedfb",
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

