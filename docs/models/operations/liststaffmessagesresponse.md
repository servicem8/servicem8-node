# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-8c94-4b94-a0bd-22e735e2754b",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-17d3-4b50-8806-22e733b8a89b",
    toStaffUuid: "123e4567-69c8-450a-95c9-22e73994918b",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-7e11-43bc-ad86-22e73e5f2ccb",
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

