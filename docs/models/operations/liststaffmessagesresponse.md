# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-2837-4ee3-96b0-22e47383a6cb",
    editDate: "2025-06-01 12:00:00",
    fromStaffUuid: "123e4567-30a1-48f4-aee0-22e47bae180b",
    toStaffUuid: "123e4567-29e0-4f42-9492-22e47d60d29b",
    sentTimestamp: "2025-06-01 12:00:00",
    deliveredTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    regardingJobUuid: "123e4567-f5bc-4391-b665-22e4782e847b",
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

