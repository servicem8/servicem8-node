# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-b632-4bcc-a329-22fc0f54482b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-97af-4f6c-8949-22fc04797c1b",
    toStaffUuid: "123e4567-cfb7-43ed-b421-22fc0732228b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-6d6d-4fd7-9060-22fc031ff0ab",
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

