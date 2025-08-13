# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-94ef-4dfc-97cc-231d2835307b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-7138-4709-8c89-231d2294595b",
    queueUuid: "123e4567-c63d-48a7-bc49-231d2e27356b",
    staffUuid: "123e4567-c35a-413f-89b3-231d2e69ba6b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-449b-4a94-8165-231d211b602b",
    allocatedByStaffUuid: "123e4567-44f3-4d05-809c-231d28a7514b",
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

