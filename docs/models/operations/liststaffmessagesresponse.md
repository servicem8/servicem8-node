# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-e43a-4c64-bb55-22ef2913307b",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-23b5-44be-bf40-22ef239fde4b",
    toStaffUuid: "123e4567-97fe-4ed3-9385-22ef2f7eeb5b",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-c980-43e3-818d-22ef2cd5750b",
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

