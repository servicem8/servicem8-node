# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-0c43-49d7-814a-230125ed207b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-b0e7-4479-8734-230125f55deb",
    queueUuid: "123e4567-2168-4602-9cd2-230126340d4b",
    staffUuid: "123e4567-a35b-4d40-9594-23012f9d117b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-788e-4f63-9a7b-230122cc101b",
    allocatedByStaffUuid: "123e4567-e2a9-42cd-8b59-23012e70683b",
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

