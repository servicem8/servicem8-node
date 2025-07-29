# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-01ff-49cb-a7c2-230fe733ffbb",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-3710-4bc2-ae2d-230fe1cdd36b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-aaa4-48c0-8ea3-230fe9a1ef8b",
  completedDuringCheckinUuid: "123e4567-a21d-4409-999b-230fe45c7d9b",
  regardingObjectUuid: "123e4567-abad-4582-9add-230feb04e08b",
  fulfilledByObjectUuid: "123e4567-b812-4f0d-9cb1-230fe11fa41b",
  assignedToStaffUuids: [
    "123e4567-fb14-4bd3-b0cf-230fe79b0f1b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-a41a-4736-b291-230fe29d742b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

