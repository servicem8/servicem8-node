# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-2310-4e62-a4b3-230fe0f5777b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-38d8-48a1-a2b7-230fea252d3b",
    toStaffUuid: "123e4567-f01d-40c4-adc8-230fe36a22fb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-7a65-463f-bda5-230fe913b47b",
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

