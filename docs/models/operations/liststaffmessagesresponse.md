# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-60e0-4831-bd90-22bb062cec8b",
    editDate: "2025-05-01 12:00:00",
    fromStaffUuid: "123e4567-39f8-4be3-ab84-22bb0431678b",
    toStaffUuid: "123e4567-1c7b-4443-8399-22bb05a332fb",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-e37d-4e2e-854b-22bb05ec582b",
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

