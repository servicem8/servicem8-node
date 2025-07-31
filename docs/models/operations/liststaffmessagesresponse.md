# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-3da1-4363-8ea9-23110177eb3b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-7dce-4fa3-9b30-231107fc4e4b",
    toStaffUuid: "123e4567-1b1f-4940-b23b-231109e563fb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-d390-48c6-b235-231105682d5b",
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

