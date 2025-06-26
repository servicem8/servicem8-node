# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-f5dc-432b-b622-22ed3a54a34b",
    editDate: "2025-06-01 12:00:00",
    jobUuid: "123e4567-d659-48e7-ad36-22ed3a2ba74b",
    queueUuid: "123e4567-b441-4201-84ff-22ed3f4a073b",
    staffUuid: "123e4567-a540-4a4d-9a05-22ed3a81d1ab",
    allocationDate: "2025-06-01 12:00:00",
    allocationWindowUuid: "123e4567-50ea-4e0d-ac51-22ed39fb3c8b",
    allocatedByStaffUuid: "123e4567-91fe-4e34-a10f-22ed385ab19b",
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

