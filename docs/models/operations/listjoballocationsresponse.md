# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-77a1-4111-99e6-22b4d385600b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    jobUuid: "123e4567-6d23-45d9-9806-22b4d3f3b4bb",
    queueUuid: "123e4567-cdb1-4d74-b47b-22b4d93d4eeb",
    staffUuid: "123e4567-b3e9-4e24-83fc-22b4d95fbcbb",
    allocationDate: "YYYY-MM-DD HH:MM:SS",
    allocationWindowUuid: "123e4567-f1e7-407e-9226-22b4daf8e30b",
    allocatedByStaffUuid: "123e4567-a109-4657-969d-22b4dc87b0ab",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    completionTimestamp: "YYYY-MM-DD HH:MM:SS",
    acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
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

