# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-51c4-45a2-a585-22fb233a3b6b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-9ec5-4378-a134-22fb2852bffb",
    queueUuid: "123e4567-a330-4f09-ab94-22fb28e4996b",
    staffUuid: "123e4567-0bb6-4094-a0ce-22fb2648eebb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-6045-4cdd-a8ef-22fb2a08bdcb",
    allocatedByStaffUuid: "123e4567-c3d4-4028-bc0f-22fb2cd76a0b",
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

