# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-fb36-47ce-b2c8-23012e17725b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-bbc5-4b57-a212-230127bf9bfb",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-4d34-46f4-a3b8-23012c5d35fb",
  completedDuringCheckinUuid: "123e4567-4d52-4cd2-824f-230127157e6b",
  regardingObjectUuid: "123e4567-0587-4826-a6a1-230128e5d3ab",
  fulfilledByObjectUuid: "123e4567-98df-4103-bfb7-2301255d254b",
  assignedToStaffUuids: [
    "123e4567-be24-4d4f-9984-23012da8c74b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-8e8d-455c-9f4f-230129f915cb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

