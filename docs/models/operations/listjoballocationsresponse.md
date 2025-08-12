# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-e23f-4da0-b4e2-231d2701720b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-78ea-4c48-a359-231d269e10cb",
    queueUuid: "123e4567-fe01-4a47-a873-231d2de3c6bb",
    staffUuid: "123e4567-74df-476f-8bfc-231d218586db",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-db36-472c-b03e-231d2fe2d5cb",
    allocatedByStaffUuid: "123e4567-b4ae-4504-8ea4-231d28c7b36b",
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

