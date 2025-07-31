# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-abf0-4a27-83de-230fe38bb21b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-b3c8-4721-8f4f-230fe148cceb",
    toStaffUuid: "123e4567-84e4-4172-8b44-230fe3460fbb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-2c57-4bbc-bfc2-230feec6691b",
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

