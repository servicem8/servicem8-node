# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-5041-427b-99d2-22e6ed8c9a0b",
    editDate: "2025-06-01 12:00:00",
    jobUuid: "123e4567-f03d-458e-a33e-22e6e1ab952b",
    queueUuid: "123e4567-c81f-4ef5-8863-22e6ea12bb4b",
    staffUuid: "123e4567-e390-43e8-b270-22e6e92a2dbb",
    allocationDate: "2025-06-01 12:00:00",
    allocationWindowUuid: "123e4567-217b-4f1d-b674-22e6e5e1527b",
    allocatedByStaffUuid: "123e4567-e11f-4af7-bc61-22e6e3b3bf5b",
    allocatedTimestamp: "2025-06-01 12:00:00",
    expiryTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    completionTimestamp: "2025-06-01 12:00:00",
    acceptanceTimestamp: "2025-06-01 12:00:00",
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

