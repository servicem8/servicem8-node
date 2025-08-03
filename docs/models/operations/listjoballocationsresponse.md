# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-dc8a-45e0-80d6-2313f156bc9b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-c2f7-4bae-a2d0-2313ffc1350b",
    queueUuid: "123e4567-3f20-480b-b3e8-2313f459c6eb",
    staffUuid: "123e4567-2026-412a-94c5-2313f9fc04cb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-3301-475b-ae9a-2313fc68142b",
    allocatedByStaffUuid: "123e4567-f27b-4744-809b-2313f41eabfb",
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

