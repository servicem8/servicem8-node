# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-c126-4c22-a133-2308ef9f6e9b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-e87f-44f6-970c-2308e664f02b",
    queueUuid: "123e4567-3851-4e86-9d60-2308e1620e0b",
    staffUuid: "123e4567-8b22-4453-9889-2308ee810e7b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-1b86-44c9-b810-2308e799bf1b",
    allocatedByStaffUuid: "123e4567-0067-45dd-a3d6-2308ec0a8cab",
    allocatedTimestamp: "2025-07-01 12:00:00",
    expiryTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    completionTimestamp: "2025-07-01 12:00:00",
    acceptanceTimestamp: "2025-07-01 12:00:00",
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

