# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-fac3-4597-957b-230c4ee6f68b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-952f-4eee-945d-230c4b4b4e8b",
    queueUuid: "123e4567-289c-42e7-b4e6-230c4cc5f29b",
    staffUuid: "123e4567-d845-4878-a1fd-230c45975d2b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-6bc4-4fbb-936f-230c4ee92e9b",
    allocatedByStaffUuid: "123e4567-4322-4eed-82d0-230c4051adfb",
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

