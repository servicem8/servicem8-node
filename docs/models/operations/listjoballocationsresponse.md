# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-3c8f-4a45-9295-22fd8b29f5eb",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-1f69-4e8c-8dfc-22fd84444ebb",
    queueUuid: "123e4567-53ab-4a1c-b0e8-22fd856c78db",
    staffUuid: "123e4567-e72d-425c-bd5d-22fd87f185bb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-cf65-4fec-8a01-22fd8417e3cb",
    allocatedByStaffUuid: "123e4567-ffe7-4648-83d4-22fd8c34eaab",
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

