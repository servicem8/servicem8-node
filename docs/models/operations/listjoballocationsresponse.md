# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-6a09-4941-bffc-230a6683df9b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-21e8-4a0a-b94b-230a64d1b61b",
    queueUuid: "123e4567-d612-49c9-847c-230a65341f3b",
    staffUuid: "123e4567-010f-4427-939b-230a6ea02e0b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-5725-4e95-9009-230a6d89ce9b",
    allocatedByStaffUuid: "123e4567-2003-4447-9ced-230a633f01db",
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

