# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-e4d5-46e8-bb40-22bcb2612a2b",
  editDate: "2025-05-01 12:00:00",
  jobUuid: "123e4567-1d5e-4bd7-a3cc-22bcb730e3cb",
  completedTimestamp: "2025-05-01 12:00:00",
  completedByStaffUuid: "123e4567-45d2-46a7-9312-22bcbb43b68b",
  completedDuringCheckinUuid: "123e4567-02a7-4a1d-a8e6-22bcba4168eb",
  regardingObjectUuid: "123e4567-938d-4da9-bb8a-22bcb47d21fb",
  fulfilledByObjectUuid: "123e4567-42c9-4c8d-bfd6-22bcba692c9b",
  assignedToStaffUuids: [
    "123e4567-19ca-4bf2-9b55-22bcb0af396b",
  ],
  assignedTimestamp: "2025-05-01 12:00:00",
  assignedByStaffUuid: "123e4567-bac2-4807-97fe-22bcbda4d44b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

