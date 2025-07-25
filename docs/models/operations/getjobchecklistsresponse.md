# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-b01a-4806-aa85-230b7863c57b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-6a2f-451c-a2d2-230b790de9ab",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-d495-43c7-bda8-230b7abe553b",
  completedDuringCheckinUuid: "123e4567-e76b-4170-ab3b-230b7e81453b",
  regardingObjectUuid: "123e4567-463b-4b15-9a32-230b7776563b",
  fulfilledByObjectUuid: "123e4567-3a8f-49e3-91c7-230b793f5c7b",
  assignedToStaffUuids: [
    "123e4567-5494-4511-a012-230b7305bb8b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-c378-4c32-a97e-230b70f2426b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

