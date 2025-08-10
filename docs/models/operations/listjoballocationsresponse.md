# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-2205-4a05-8980-23184693df9b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-ee46-4d28-8f9d-231849c8c11b",
    queueUuid: "123e4567-7b1f-4245-9c32-231845b10e4b",
    staffUuid: "123e4567-46ec-40a2-bf8d-23184f87cc0b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-dbfa-48d0-bc0e-231842ca1ffb",
    allocatedByStaffUuid: "123e4567-3f08-48dd-8203-23184a4c213b",
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

