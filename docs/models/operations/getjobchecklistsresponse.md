# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-79f8-4781-9304-22e07cb3896b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-1e1a-4747-ab31-22e0774161db",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-3da4-43a4-8ed4-22e073851c5b",
  completedDuringCheckinUuid: "123e4567-e144-4b89-b659-22e074c877bb",
  regardingObjectUuid: "123e4567-cfe1-477c-9cfa-22e075d53afb",
  fulfilledByObjectUuid: "123e4567-94e6-4637-bdff-22e07a13501b",
  assignedToStaffUuids: [
    "123e4567-9878-45a1-8d37-22e074d640cb",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-811c-4c43-a4bc-22e077bc5f8b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

