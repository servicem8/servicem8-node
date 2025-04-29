# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-c22a-430a-9448-22b4d045c56b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    fromStaffUuid: "123e4567-022a-480e-a659-22b4db3c7ddb",
    toStaffUuid: "123e4567-9c5d-4d25-94ae-22b4d25e969b",
    sentTimestamp: "YYYY-MM-DD HH:MM:SS",
    deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    regardingJobUuid: "123e4567-aefd-48d4-a075-22b4dcd3cfdb",
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

