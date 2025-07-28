# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-edfc-4bd7-a497-230c4fe1161b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-992b-4b43-8a69-230c46b2b7db",
    queueUuid: "123e4567-de04-4301-bce4-230c4bdfb36b",
    staffUuid: "123e4567-26ee-4b67-a67e-230c450f61fb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-0abb-456a-b9fa-230c49cf914b",
    allocatedByStaffUuid: "123e4567-ca1d-42bd-ad4a-230c47bbe23b",
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

