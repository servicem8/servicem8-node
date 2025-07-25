# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-8dd9-4aa4-b2b0-230b761b8eab",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-7454-4cc8-aedc-230b72c1a36b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-c9bb-47fb-a87b-230b7509293b",
  completedDuringCheckinUuid: "123e4567-083e-4914-8b20-230b7606496b",
  regardingObjectUuid: "123e4567-475a-4a7d-853d-230b779f4ceb",
  fulfilledByObjectUuid: "123e4567-29c9-4a87-bcf5-230b72803afb",
  assignedToStaffUuids: [
    "123e4567-8a48-42db-ade0-230b7e7a812b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-817c-490c-a49e-230b7dc69dfb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

