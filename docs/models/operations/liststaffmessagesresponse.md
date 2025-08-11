# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-5c62-4630-999b-231cfbe19bab",
    editDate: "2025-08-01 12:00:00",
    fromStaffUuid: "123e4567-28e6-46c4-ba1f-231cf404770b",
    toStaffUuid: "123e4567-3d8c-4628-afa9-231cfddcf75b",
    sentTimestamp: "2025-08-01 12:00:00",
    deliveredTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    regardingJobUuid: "123e4567-d977-4fa9-abcc-231cfe1c79ab",
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

