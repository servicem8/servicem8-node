# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-04af-4a43-97a1-2307647b79cb",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-ff3b-4990-a1d7-230769dc1f4b",
    queueUuid: "123e4567-8423-4b2a-b341-23076fe9f81b",
    staffUuid: "123e4567-d503-484c-bcc5-230765e2ac6b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-c89b-4c0b-a1e6-230769fb4b1b",
    allocatedByStaffUuid: "123e4567-2feb-43b2-8487-2307674b79bb",
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

