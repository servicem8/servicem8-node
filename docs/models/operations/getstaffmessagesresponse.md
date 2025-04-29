# GetStaffMessagesResponse


## Supported Types

### `components.StaffMessage`

```typescript
const value: components.StaffMessage = {
  uuid: "123e4567-37bd-4f2f-92a8-22b4d8a598fb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  fromStaffUuid: "123e4567-f86c-4727-8836-22b4d5f09afb",
  toStaffUuid: "123e4567-9db9-4b7c-ae63-22b4d530359b",
  sentTimestamp: "YYYY-MM-DD HH:MM:SS",
  deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
  readTimestamp: "YYYY-MM-DD HH:MM:SS",
  regardingJobUuid: "123e4567-727f-4ff4-ba63-22b4d14b3beb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

