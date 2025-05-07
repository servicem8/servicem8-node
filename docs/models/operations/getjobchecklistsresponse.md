# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-b773-4ca7-b3b5-22bcbc0ae90b",
  editDate: "2025-05-01 12:00:00",
  jobUuid: "123e4567-9dc4-4d9c-b975-22bcb92b859b",
  completedTimestamp: "2025-05-01 12:00:00",
  completedByStaffUuid: "123e4567-0ff3-4840-bf94-22bcb1d2e66b",
  completedDuringCheckinUuid: "123e4567-0959-4788-b419-22bcb4611a1b",
  regardingObjectUuid: "123e4567-a457-4970-ab0b-22bcb64c0a9b",
  fulfilledByObjectUuid: "123e4567-67ae-4562-a684-22bcb8cf8c9b",
  assignedToStaffUuids: [
    "123e4567-5489-4a63-8dca-22bcb8c4048b",
  ],
  assignedTimestamp: "2025-05-01 12:00:00",
  assignedByStaffUuid: "123e4567-9e6b-4542-9552-22bcbd1567fb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

