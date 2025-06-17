# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-4e58-431a-b136-22e47fa1c90b",
    editDate: "2025-06-01 12:00:00",
    jobUuid: "123e4567-197b-4636-8f3a-22e476eb4ffb",
    queueUuid: "123e4567-6aa7-422c-866a-22e47e7503ab",
    staffUuid: "123e4567-ee4e-4829-b9fd-22e47f1d394b",
    allocationDate: "2025-06-01 12:00:00",
    allocationWindowUuid: "123e4567-6ebf-4c01-a8c2-22e47e9597cb",
    allocatedByStaffUuid: "123e4567-6127-47af-836e-22e4742c3f3b",
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

