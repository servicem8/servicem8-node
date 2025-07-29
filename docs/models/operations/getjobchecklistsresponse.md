# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-b061-48c6-9d30-230fe769c9db",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-d960-481c-a1ba-230fe7b56a8b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-d7ca-4b31-94bc-230fed7020cb",
  completedDuringCheckinUuid: "123e4567-fc35-4444-9574-230fe7aacffb",
  regardingObjectUuid: "123e4567-35b0-4bf5-848d-230fe2acc9fb",
  fulfilledByObjectUuid: "123e4567-43b3-446a-a8f3-230febd34f5b",
  assignedToStaffUuids: [
    "123e4567-6d30-4352-b93e-230fe9cab6eb",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-553e-4460-9bf6-230fe1b0908b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

