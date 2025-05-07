# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-c404-4397-9463-22bb0886cc6b",
    editDate: "2025-05-01 12:00:00",
    jobUuid: "123e4567-5f72-4b98-9a8e-22bb0981daeb",
    queueUuid: "123e4567-bafc-4ba1-bda9-22bb0226d14b",
    staffUuid: "123e4567-9d9a-47ba-b94a-22bb0aa97b7b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-755f-4523-a580-22bb0bbd2d9b",
    allocatedByStaffUuid: "123e4567-e3a6-43b1-9f32-22bb0c9932bb",
    allocatedTimestamp: "2025-05-01 12:00:00",
    expiryTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    completionTimestamp: "2025-05-01 12:00:00",
    acceptanceTimestamp: "2025-05-01 12:00:00",
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

