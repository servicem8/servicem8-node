# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-61c6-4cc5-b5f8-231b25c8d58b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-b095-4b88-9bec-231b2e087dab",
    queueUuid: "123e4567-3b0d-48f0-aba9-231b22dde22b",
    staffUuid: "123e4567-ff2c-448d-aaac-231b277edbcb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-9c82-4dfe-ad16-231b2dc81b8b",
    allocatedByStaffUuid: "123e4567-eef7-457f-8f4b-231b278c870b",
    allocatedTimestamp: "2025-08-01 12:00:00",
    expiryTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    completionTimestamp: "2025-08-01 12:00:00",
    acceptanceTimestamp: "2025-08-01 12:00:00",
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

