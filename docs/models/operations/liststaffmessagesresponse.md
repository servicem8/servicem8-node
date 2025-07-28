# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-a411-43b5-834b-230ef44dd5cb",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-eeb5-4834-a1c2-230ef9dbc3db",
    toStaffUuid: "123e4567-5361-4fc1-ba85-230ef5011b8b",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-fcc8-4214-84d1-230ef0110d2b",
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

