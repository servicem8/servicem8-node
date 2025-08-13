# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-9584-4235-8890-231ef127f94b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-de2e-42c6-900b-231ef65dc64b",
    queueUuid: "123e4567-6d6b-4396-b5e1-231effea8afb",
    staffUuid: "123e4567-a6f1-4198-9905-231efe66979b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-12a7-4e6c-8591-231ef2c33fdb",
    allocatedByStaffUuid: "123e4567-db03-4899-9c06-231ef4f5a41b",
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

