# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-0e86-45b9-87a7-22e6eebd086b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-82a5-437f-96bc-22e6e55c5e9b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-6032-4f2e-9401-22e6ea08f14b",
  completedDuringCheckinUuid: "123e4567-1a72-43cf-8c45-22e6e8bb3c7b",
  regardingObjectUuid: "123e4567-1875-4ecd-a9d5-22e6e2db1a9b",
  fulfilledByObjectUuid: "123e4567-8c55-4248-b7ac-22e6e1b723bb",
  assignedToStaffUuids: [
    "123e4567-b9ed-4a05-a4ff-22e6e4910bfb",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-efd4-445c-983e-22e6e60abd9b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

