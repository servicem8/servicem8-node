# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-fbc9-498a-87aa-22e47d3a637b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-ba4f-4af1-afbe-22e47713233b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-9336-4ef5-b47f-22e47debd6bb",
  completedDuringCheckinUuid: "123e4567-92ee-448e-9fa7-22e4753da01b",
  regardingObjectUuid: "123e4567-4d9d-4179-8434-22e477e68bbb",
  fulfilledByObjectUuid: "123e4567-6d0e-4c3b-81c8-22e47a30383b",
  assignedToStaffUuids: [
    "123e4567-8a6e-4453-a6ce-22e4711cc9ab",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-9249-43d3-b95b-22e47606d94b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

