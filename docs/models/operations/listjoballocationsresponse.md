# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-bfae-4535-ab16-22e73bf61c4b",
    editDate: "2025-06-01 12:00:00",
    jobUuid: "123e4567-4e84-478d-ba48-22e73e49aebb",
    queueUuid: "123e4567-6b73-4edb-943d-22e73d87193b",
    staffUuid: "123e4567-d8f6-4f2d-8579-22e7384c4d7b",
    allocationDate: "2025-06-01 12:00:00",
    allocationWindowUuid: "123e4567-f8d2-4c58-8c08-22e73b32c17b",
    allocatedByStaffUuid: "123e4567-d1ab-4318-a205-22e73311748b",
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

